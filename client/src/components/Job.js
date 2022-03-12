import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Job = (props) => {
  const navigate = useNavigate();
  //const { name, id} = props;

  return (
    <div className="box">
     {/* <p>{props.name}</p> */}
      <p>{props.kind}</p>
     
    </div>
  )
}

export default Job
