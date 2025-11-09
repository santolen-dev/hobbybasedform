import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import FilterButtons from './components/FilterButtons'
import axios from 'axios'
import './App.css'

const API_URL = 'http://localhost:8080/api/todos'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await axios.get(API_URL)
      setTodos(response.data)
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend server is running.')
      console.error('Error fetching todos:', err)
    } finally {
      setLoading(false)
    }
  }

  const addTodo = async (text, priority = 'medium') => {
    try {
      const newTodo = {
        text: text,
        completed: false,
        priority: priority
      }
      const response = await axios.post(API_URL, newTodo)
      setTodos([...todos, response.data])
    } catch (err) {
      setError('Failed to add todo')
      console.error('Error adding todo:', err)
    }
  }

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedTodo)
      setTodos(todos.map(todo => todo.id === id ? response.data : todo))
    } catch (err) {
      setError('Failed to update todo')
      console.error('Error updating todo:', err)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      setTodos(todos.filter(todo => todo.id !== id))
    } catch (err) {
      setError('Failed to delete todo')
      console.error('Error deleting todo:', err)
    }
  }

  const toggleComplete = async (id) => {
    const todo = todos.find(t => t.id === id)
    if (todo) {
      await updateTodo(id, { ...todo, completed: !todo.completed })
    }
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const stats = {
    total: todos.length,
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length
  }

  if (loading) {
    return (
      <div className="container todo-container">
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container todo-container">
      <div className="todo-card">
        <div className="todo-header">
          <h1 className="mb-0">
            <i className="bi bi-check2-square me-2"></i>
            Todo List
          </h1>
          <p className="mb-0 mt-2 opacity-75">Stay organized and productive</p>
        </div>
        <div className="card-body p-4">
          {error && (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              {error}
              <button type="button" className="btn-close" onClick={() => setError(null)}></button>
            </div>
          )}

          <div className="todo-stats">
            <div className="stat-item">
              <div className="stat-number">{stats.total}</div>
              <div className="stat-label">Total</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-warning">{stats.active}</div>
              <div className="stat-label">Active</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-success">{stats.completed}</div>
              <div className="stat-label">Completed</div>
            </div>
          </div>

          <TodoForm onAdd={addTodo} />
          <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
          <TodoList
            todos={filteredTodos}
            onToggleComplete={toggleComplete}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </div>
  )
}

export default App

