import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Ranch from '../components/Ranch'

const Ranches = () => {
  const navigate = useNavigate()
  const [ranches,setRanches] = useState([])
  useEffect(() => {
    console.log('Mounted & Doing API Call To Get Ranches')
    getRanches()
  }, [])

  const deleteRanch = async (id) => {
    await axios.delete(`/api/ranches/${id}`)
    let filteredRanches = ranches.filter(r => r.id !== id)
    setRanches(filteredRanches)
  }

  const getRanches = async () => {
    let res = await axios.get('/api/ranches')
    setRanches(res.data)
  }

  const renderRanches = () => {
    return ranches.map(r => {
      return <Ranch key={r.id} {...r} deleteRanch={deleteRanch} />
    })
  }

  return (
    <div className='border'>
      <h1 className='ranches_heading'>Ranches</h1>
      <button onClick={() => navigate('/ranches/new')}>new</button>
      <div>
        {renderRanches()}
      </div>
      <p>{JSON.stringify(ranches)}</p>
    </div>
  )
}

export default Ranches
