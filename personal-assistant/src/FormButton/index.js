import React from 'react'
import { Button } from './styles'

const FormButton = (allTodos, setAllTodos) => {

  const [todo, setTodo] =useState('')
  <Button type="button" onClick={() => setAllTodos([...allTodos, {todo}])}>
    Add Todo
  </Button>
}

export default FormButton
