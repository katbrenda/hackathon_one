import React, { useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Animal from '../components/Animal'
import AnimalForm from '../components/AnimalForm'
import axios from 'axios'

const RanchShow = () => {

return (
    <div className='border'>
                <h1>name</h1>
            <p>id:</p>
            <h1>Animals:</h1>
            {/* <AnimalForm addAnimal={addAnimal} /> */}
            <hr />
            {/* {renderAnimals()} */}
            <hr />
            {/* <p>{JSON.stringify(animals)}</p> */}
    </div>
  )
}

export default RanchShow