import React, { useState } from 'react'
import nanoid from 'nanoid'
import { Container } from './styles'
import FormInput from '../FormInput'

const Form = ({ allTodos, setAllTodos }) => {

  const [todo, setTodo] = useState('') 
  const [date, setDate] = useState('') 
  /* const [topic, setTopic] = useState('')
   const [tag, setTag] = useState('') */


  return (
    <div>
      <Container>
        <FormInput placeholder="Enter Todo" value={todo} setValue={setTodo} />
        <FormInput placeholder="Due Date" value={date} setValue={setDate} />
        <button type="button" onClick={() => setAllTodos([...allTodos, { todo, date, id: nanoid() }])}> Add Todo </button>
      </Container>
    </div>
  )
}

export default Form
