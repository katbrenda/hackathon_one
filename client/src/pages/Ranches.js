import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Ranches = () => {
  const navigate = useNavigate()
  const [ranches, setRanches] = useState([])
  useEffect(() => {
    console.log('Mounted & Doing API Call To Get Ranches')
    getRanches()
  })

  const deleteBug = async (id) => {
    await axios.delete(`/api/ranches/${id}`)
    let filteredRanches = ranches.filter(r => r.id !== id)
    setRanches(filteredRanches)
  }

  const getRanches = async () => {
    let res = await axios.get('/api/ranches')
    setRanches(res.data)
  }

  return (
    <div className='border'>
      <h1>Ranches</h1>
    </div>
  )
}

export default Ranches