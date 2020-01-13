import React from 'react'

const Todo = ({
  id, todo, allTodos, setAllTodos,
}) => (
  <div>
    <p key={id}>
      {''}
      {todo}
      {''}
    </p>
    <button
      type="button"
      onClick={() => {
        setAllTodos(allTodos.filter(t => { if (id === t.id) { return false } return true }))
      }}
    >
            Delete Todo
    </button>
  </div>


)
export default Todo
