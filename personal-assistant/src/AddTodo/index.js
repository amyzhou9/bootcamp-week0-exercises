import React, { useState } from 'react'
import { Button, Input, Container } from './styles'
import nanoid from 'nanoid'

/*
const options = [
  { value: 'Red', label: 'Orange' },
  { value: 'Yellow', label: 'Green' },
  { value: 'Blue', label: 'Purple' }
]
*/

const AddTodo = ({ allTodos, setAllTodos }) => {
  const [todo, setTodo] = useState('')
  return (
    <div>
      <Container>
        <Input placeholder="" value={todo} onChange={e => setTodo(e.target.value)}/>
        <Button onClick={() => setAllTodos([...allTodos, { todo, id: nanoid() }])}> Add Todo</Button>
      </Container>
    </div>
  )
}


export default AddTodo
