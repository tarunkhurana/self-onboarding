import React, { useEffect, useState } from 'react'

const Input = (props) => {
  const [value, setValue] = useState('')
  const { type, defaultValue, onChangeEvent } = props;

  useEffect(() => {
    if(defaultValue) setValue(defaultValue)
  }, [defaultValue, setValue])

  const onChange = e => {
    setValue(e.target.value)
    onChangeEvent(e.target.value)
  }
  return (
    <input type={type} value={value} onChange={onChange}/>
  )
}

export default Input
