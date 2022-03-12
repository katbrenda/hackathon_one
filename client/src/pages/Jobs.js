import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Job from '../components/Job'

const Jobs = ()=>{
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])
    useEffect(()=>{

        getJobs()

    },[])


    

    const getJobs = async()=>{
        let res = await axios.get('/api/jobs')
        setJobs(res.data)
    }
    const renderJobs = () => {
       return jobs.map(j=> {
           return <Job key={j.id} {...j}/>
       })
    }
    return (
        <div className='border'>
            <h1>Jobs</h1>
            <div>
                {renderJobs()}
            </div>
            <p>{JSON.stringify(jobs)}</p>
        </div>
    )
}

export default Jobs
