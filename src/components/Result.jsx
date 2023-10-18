import React from 'react'
import { useLocation } from 'react-router-dom'

const Result = () => {
  const location=useLocation()
  const recivedData=location.state
  return (
    <div>
        <h1>{`you have selected ${recivedData.stateName},${recivedData.cityName}`}</h1>
        <h1></h1>
    </div>
  )
}

export default Result