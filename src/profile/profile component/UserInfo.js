import React from 'react'

const UserInfo = ({name,bio,profession,comment}) => {
  return (
    <div>
        <h1> Hello User, here is your Info: </h1>
        <h2> {name} </h2>
        <h2> {bio} </h2>
        <h2> {profession} </h2>
        <h2> {comment} </h2>
    </div>
  )
}

export default UserInfo