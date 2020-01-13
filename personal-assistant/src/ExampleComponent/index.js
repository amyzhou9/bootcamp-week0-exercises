import React from 'react'
import { FancyButton } from './styles'

const ExampleComponent = ({ alertText }) => (
  <FancyButton onClick={() => alert(alertText)}>Click Me!</FancyButton>
)

export default ExampleComponent


/*
  <div>
     {
     if(!(allTodos.length))
      ? <p>You have no todos! Enjoy your day!</p>
      : (allTodos.map(({ todo, id }) => (
        <Todo todo={todo} id={id} key={id} allTodos={allTodos} setAllTodos={setAllTodos} />
      )))}
  </div> */