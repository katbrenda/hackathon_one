import React from 'react'
import { DataContext } from '../providers/DataProvider'
import {Link, Outlet} from 'react-router-dom'
import Ranches from './Ranches'


const Home = () => {

  return (
    <div className='home_div'>
      <h1>Home</h1>
        <Link className='button' to='/ranches'>Ranches</Link>  {' '}
        <Link className='button' to='/about'>About</Link>  {' '}
        <Link className='button' to='/jobs'>Jobs</Link> {' '}
      
      
      
    </div>
  )
}

export default Home
