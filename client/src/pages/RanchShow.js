import React, { useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Animal from '../components/Animal'
import AnimalForm from '../components/AnimalForm'
import axios from 'axios'

const RanchShow = () => {
const [animals, setAnimals] = useState([])
useEffect(()=>{
  // getAnimals()
},[])
// const addAnimal = async (Animal)=>{
//   // add to db
//   let res = await axios.post(`/api/ranches/${params.id}/animals`, Animal)
//   // updating state (animals)
//   setAnimals([...animals, res.data])
// } 
// const updateAnimal = async (animal)=>{
//   // update to db
//   let res = await axios.put(`/api/ranches/${params.id}/animals/${animal.id}`, animal)
//   // UI
//   const updateAnimals = animals.map(t => t.id === res.data.id ? res.data : t )
//   console.log('res.data:', res.data)
//   console.log(updateAnimals)
//   setAnimals(updateAnimals)
// }
// // hook up button and passing correct data
// // axios call
// // UI
// const deleteAnimal = async(id)=>{
//    console.log('ranch id',params.id)
//    console.log('animal id', id)
//    // DB
//    let res = await axios.delete(`/api/ranches/${params.id}/animals/${id}`)
//    // UI
//    setAnimals(animals.filter(t=> t.id !== id))
// }
// // axios get
// const getAnimals = async () => {
//     // what is path, if unsure look at routes file
//     // api call
//     let res = await axios.get(`/api/ranches/${params.id}/animals`)
//     // store result of axios in state (useState)
//     // UI
//     setAnimals(res.data)
// }
// // TODO: render
// const renderAnimals =()=>{
//   return animals.map(t => <Animal deleteAnimal={deleteAnimal} key={t.id} {...t} updateAnimal={updateAnimal}/>)
// }
const params = useParams()
const location = useLocation()





  return (
    <div className='border'>
                <h1>Ranch: {location.state.name}</h1>
            <p>id {params.id}</p>
            {/* <AnimalForm addAnimal={addAnimal} /> */}
            <hr />
            {/* {renderAnimals()} */}
            <hr />
            <p>{JSON.stringify(animals)}</p>
    </div>
  )
}

export default RanchShow