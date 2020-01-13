import React from 'react'
/* import { inputCSS } from 'react-select/src/components/Input' */
import Todo from '../Todo'
import { Container } from './styles'


const TodoList = ({ allTodos, setAllTodos, filter }) => (

  <div>
    <Container>
      {!(allTodos.length)
        ? <p>You have no todos! Enjoy your day!</p>
        : (allTodos.filter(t => { if (t.todo.toLowerCase().includes(filter)) { return true } return false }).map(({ todo, id }) => (
          <Todo todo={todo} id={id} key={id} allTodos={allTodos} setAllTodos={setAllTodos} />
        )))}
    </Container>
  </div>
)

export default TodoList
