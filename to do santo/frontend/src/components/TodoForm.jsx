import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('medium')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text.trim(), priority)
      setText('')
      setPriority('medium')
    }
  }

  return (
    <div className="todo-form-card">
      <form onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              placeholder="What needs to be done?"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100">
              <i className="bi bi-plus-circle me-1"></i>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TodoForm

