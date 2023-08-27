import React from 'react'
import { useSelector } from 'react-redux'


const TestRedux1 = () => {
    const {user} = useSelector((state) => ({...state}))

    console.log('test',user)

  return (
    <div>
      TestRedux1<br/><br/>
      {user.value}<br/>
      {user.user}<br/>
    </div>
  )
}

export default TestRedux1
