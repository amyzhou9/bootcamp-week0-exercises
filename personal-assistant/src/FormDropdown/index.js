import React from 'react'
import { StyledSelect } from './styles'

const options = [
  { value: 'Red', label: 'Orange' },
  { value: 'Yellow', label: 'Green' },
  { value: 'Blue', label: 'Purple' },
]

const FormDropdown = () => {
  <StyledSelect options={options} />
}

export default FormDropdown
