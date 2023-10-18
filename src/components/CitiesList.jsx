import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CitiesList = ({states1,selectedCity}) => {
    let [city,setCity]=useState([])
    let [scity,setSCity]=useState([])

   useEffect(()=>{
    axios.get(`http://api.minebrat.com/api/v1/states/cities/${states1}`)
    .then((resp)=>{
        console.log(resp.data);
        setCity(resp.data)
    })
   },[])
   let handlecity=(stateD)=>{
    if(stateD!=="")
    {
        setSCity(stateD);
        let d = city.filter((data)=>{
            return data.stateId = stateD
        })
        selectedCity(d[0])
    }

}
  return (
    <div>
        <select value={scity} onChange={(e)=>{handlecity(e.target.value)}}>
            <option value="">Select a city</option>
            {city.map((city1)=>{
                <option key={city1.cityId} value={city1.cityId}>{city1.cityName}</option>
            })}
        </select>
    </div>
  )
}

export default CitiesList