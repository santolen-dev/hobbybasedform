function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { key: 'all', label: 'All', icon: 'bi-list-ul' },
    { key: 'active', label: 'Active', icon: 'bi-circle' },
    { key: 'completed', label: 'Completed', icon: 'bi-check-circle' }
  ]

  return (
    <div className="filter-buttons">
      {filters.map(filter => (
        <button
          key={filter.key}
          className={`btn ${currentFilter === filter.key ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => onFilterChange(filter.key)}
        >
          <i className={`bi ${filter.icon} me-1`}></i>
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons

