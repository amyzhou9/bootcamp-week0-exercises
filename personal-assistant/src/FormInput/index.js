import React from 'react'
import { Input } from './styles'

const FormInput = ({ placeholder, value, setValue }) => (
  <div>
    <Input placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} />
  </div>

)

export default FormInput
