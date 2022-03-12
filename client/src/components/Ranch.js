import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import RanchShow from '../pages/RanchShow';


const Ranch = (props) => {
  const navigate = useNavigate();
  const { name, id, deleteRanch} = props;

  return (
    <div className="border">
      <p className='title'>{name}</p>
     <Link className='button' to={`/ranches/:id`} state={{name, id}}>show</Link>
      <button className='button' onClick={() => deleteRanch(id)}>delete</button>
      <button className='button' onClick={() =>navigate(`/ranches/${id}/edit`, { state: { name, id}})}>edit</button>
    </div>
  )
}

export default Ranch
