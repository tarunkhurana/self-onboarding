import React, { useEffect } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

const Dashboard = () => {
  const { value, setValue } = useLocalStorage('dashboardData', null)

  useEffect(() => {
    if(setValue) setValue({
        key: 'Hello World'
    })
  }, [setValue])
  return (
    <div>
      This is dashboard page.
      <br/>
      {value.key}      
    </div>
  )
}

export default Dashboard
