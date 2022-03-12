import React from 'react'

const Animal = (props) => {

  return (
    <div className='border'>
      <h1>Name: {props.kind}</h1>
      <p>ID: {props.id}</p>
      <p>Price: {props.price}</p>

    </div>
  )
}

export default Animal