import React from 'react'
import UserInterface from './UserInterface'

const UserComponent: React.FC<UserInterface> = (props) => {
  return (
    <div>
      <h1>User Component</h1>
      Hello, <b>{props.name}</b>
      <br />
      You are <b>{props.age} years old</b>
      <br />
      You live at: <b>{props.address}</b>
      <br />
    </div>
  )
}

export default UserComponent
