import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Animal from '../components/Animal'
import AnimalForm from '../components/AnimalForm'
import axios from 'axios'


const RanchShow = () => {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    getAnimals()
  },[])

  const addAnimal = async (animal) => {
    // Add Animal To DB
    let res = await axios.post(`/api/ranches/${params.id}/animals`, animal)
    // Update Animal State
    setAnimals([...animals, res.data])
  }

  const updateAnimal = async (animal) => {
    // Update Animal To DB
    let res = await axios.put(`/api/ranches/${params.id}/animals/${animal.id}`, animal)
    // Update UI
    const updateAnimals = animals.map (a => a.id === res.data.id ? res.data : a)
    console.log('Update Animals Called')
    console.log('Animals res.data:', res.data)
    setAnimals(updateAnimals)
  }

  const deleteAnimal = async (id) => {
    console.log('Ranch ID:', params.id)
    console.log('Animal ID:', id)

    try {
    let res = await axios.get(`/api/ranches/${params.id}/animals`)
    setAnimals(res.data)
    } catch (err) {
      console.log('Error Deleting Animal')
    }
  }

  const getAnimals = async () => {
    try {
    let res = await axios.get(`/api/ranches/${params.id}/animals`)
    setAnimals(res.data)
    } catch (err) {
      alert ('Error Occurred Getting Animals')
    }
  }

  const renderAnimals = () => {
    return animals.map(a => <Animal deleteAnimal={deleteAnimal} key={a.id} {...a}/>)
  }

  const params = useParams()
  const location = useLocation()

  return (
    <div className='border'>
      <h1>{location.state.name}</h1>
      <h3>ID: {params.id}</h3>
      <h1>Animals:</h1>
      {/* Do we want this here? */}
      {/* <AnimalForm addAnimal={addAnimal} /> */}
      {renderAnimals()}
      <p>{JSON.stringify(animals)}</p>
    </div>
  )
}

export default RanchShow
