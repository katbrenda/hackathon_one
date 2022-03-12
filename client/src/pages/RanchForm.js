import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'
import axios from 'axios'

const RanchForm = () => {
  const {addRanch} = useContext(DataContext)
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState(location.state ? location.state.name : "");
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (params.id) {
        await axios.put(`/api/ranches/${params.id}`, {
          name, id: params.id,
        });
      } else {
        let res = await axios.post(`/api/ranches`, { name });
        console.log('res.data:', res.data)
        addRanch(res.data)
      }
      navigate("/ranches");
    } catch (err) {
      alert("Error adding Ranch");
    }
  };


  return (
    <div className='border'>
    
      <h1>{params.id ? "Edit" : "New"} RanchForm</h1>
      <form onSubmit={handleSubmit}>
        <h2 className='ranches'>Name</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button className='button'>{params.id ? "Update" : "Create"}</button>
      </form>
    </div>
  )
}

export default RanchForm
