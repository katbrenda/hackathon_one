import React from 'react'

const Animal = (props) => {

  return (
    <div className='box'>
      <h1>Name: {props.kind}</h1>
      <p>ID: {props.id}</p>
    </div>
  )
}

export default Animal
