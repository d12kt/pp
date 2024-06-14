import React from "react"

function User(props) {
  return <h1>Привет, меня зовут {props.name}, мне {props.age} лет, я живу в {props.city}</h1>
}

export default User