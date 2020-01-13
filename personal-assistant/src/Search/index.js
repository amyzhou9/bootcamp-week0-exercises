import React, { useState } from 'react'
import FormInput from '../FormInput'
import { Container } from './styles'

const Search = ({ filter, setFilter }) => (
  <div>
    <Container>
      <FormInput placeholder="Search Your To-Dos" value={filter} setValue={setFilter} />
    </Container> 
  </div>
)

export default Search
