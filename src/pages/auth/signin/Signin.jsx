import React from 'react'
import Input from '../../../components/form/Input'

const Signin = () => {
 
  const onChangeEvent = (value) => {
    console.log(value)
  }
  return (
    <div>
      This,is signin page
      <form>
        <Input type="text" defaultValue='Input Value' onChangeEvent={onChangeEvent}/>
      </form>
    </div>
  )
}

export default Signin
