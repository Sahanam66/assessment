import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CitiesList from './CitiesList'
import { useNavigate } from 'react-router-dom'

const List = () => {
    let[states,setStates]=useState([])
    let[states1,setStates1]=useState('')
    let[stateData,setStateData]=useState('')


    let[city,setCity]=useState(' ')
    let[sub,setSub]=useState(false)

    useEffect(()=>{
        axios.get('http://api.minebrat.com/api/v1/states')
        .then((resp)=>{
            console.log(resp.data);
            setStates(resp.data)
        })
    },[])
    let navigate=useNavigate()
    let handleSubmit=()=>{
        navigate('/result',{state:{stateName:stateData.stateName,cityName:city.cityName}})
    }
    let handleChange = (stateD) =>{
        setStates1(stateD);
        let d = states.filter((data)=>{
            return data.stateId = stateD
        })
        setStateData(d[0])

    }
  return (
    <div>
        <select value={states1} onChange={(e)=>{handleChange(e.target.value)}}>
        {states.map((state)=>{
            <option key={state.stateId}>{state.stateName}</option>
        })}
        </select>
        <CitiesList states1={states1} selectedCity={setCity} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default List