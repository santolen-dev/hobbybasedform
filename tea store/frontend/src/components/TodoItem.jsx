import { useState } from 'react'

function TodoItem({ todo, onToggleComplete, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const [editPriority, setEditPriority] = useState(todo.priority)

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(todo.id, {
        ...todo,
        text: editText.trim(),
        priority: editPriority
      })
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setEditPriority(todo.priority)
    setIsEditing(false)
  }

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'priority-high'
      case 'medium':
        return 'priority-medium'
      case 'low':
        return 'priority-low'
      default:
        return 'priority-medium'
    }
  }

  const getPriorityLabel = (priority) => {
    return priority.charAt(0).toUpperCase() + priority.slice(1)
  }

  if (isEditing) {
    return (
      <div className={`todo-item fade-in ${todo.completed ? 'completed' : ''}`}>
        <div className="row g-2 align-items-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-sm"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSave()}
              autoFocus
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-select form-select-sm"
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-sm btn-success me-1"
              onClick={handleSave}
            >
              <i className="bi bi-check"></i>
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={handleCancel}
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`todo-item fade-in ${todo.completed ? 'completed' : ''}`}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center flex-grow-1">
          <div className="form-check me-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
          </div>
          <div className="flex-grow-1">
            <span className="todo-text">{todo.text}</span>
            <span className={`priority-badge ${getPriorityClass(todo.priority)} ms-2`}>
              {getPriorityLabel(todo.priority)}
            </span>
          </div>
        </div>
        <div className="d-flex gap-2">
          <button
            className="btn btn-sm btn-outline-primary btn-action"
            onClick={() => setIsEditing(true)}
            title="Edit"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-danger btn-action"
            onClick={() => onDelete(todo.id)}
            title="Delete"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem

