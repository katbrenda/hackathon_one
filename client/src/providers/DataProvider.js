import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [ranchData, setRanchData] = useState([])

  useEffect(() => {
    console.log('UseEffect In DataProvider Called')
    getRanchData()
  },[])

  const addRanch = (ranch) => {
    setRanchData([...ranchData, ranch])
  }

  const deleteRanch = async (id) => {
    // Delete from DB
    let res = await axios.delete(`/api/ranches/${id}`)
    // Delete from UI
    const filteredRanches = ranchData.filter(rd => rd.ranch.id !== id)
    setRanchData(filteredRanches)
  }

  const getRanchData = async () => {
    let res = await axios.get('/api/ranches')
    setRanchData(res.data)
  }

  return (
    <DataContext.Provider value={{ranchData, addRanch, deleteRanch}}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider