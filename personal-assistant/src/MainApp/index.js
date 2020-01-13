/* import Input from "react-select/src/components/Input" */
import React, { useState } from 'react'
import Form from '../Form'
import NavBar from '../NavBar'
import Search from '../Search'
import TodoList from '../TodoList'

const MainApp = () => {
  const [allTodos, setAllTodos] = useState([])
  const [filter, setFilter] = useState('')

  return (
    <div>
      <NavBar />
      <Search filter={filter} setFilter={setFilter} />
      <Form allTodos={allTodos} setAllTodos={setAllTodos} />
      <TodoList allTodos={allTodos} setAllTodos={setAllTodos} filter={filter} />
      {console.log(allTodos)}
      {/*
      {allTodos.map(({ todo, id }) => (
        <p key={id}>
          {' '}
          {todo}
          {' '}
        </p>
      ))} */}

    </div>
  )
}

export default MainApp
