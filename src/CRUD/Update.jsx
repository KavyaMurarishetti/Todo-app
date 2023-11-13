import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  let [user,setUser]=useState([])
  let [data,setData]=useState({
    name:"",
    place:"",
    age:"",
    dob:""
  })
  let {id}=useParams()
  let navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:3000/users/"+id)
        .then((result)=>setData(result.data))
        .catch((error)=>console.log(error))
    },[])

  let handleChange=(e)=>{
    let {name,value}=e.target
    setData({...data,[name]:value})

  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    axios.put("http://localhost:3000/users/"+id,data)
    .then((val)=>{
      navigate("/")
    })

  }
  return (
    
    <form onSubmit={handleSubmit}>
    <label>Name:</label>
    <input type='text' id='name' name='name' value={data.name} onChange={handleChange}/><br/><br/>
    <label>Place:</label>
    <input type='text' id='place' name='place' value={data.place} onChange={handleChange}/><br/><br/>
    <label>Age:</label>
    <input type='tel' id='age' name='age' value={data.age} onChange={handleChange}/><br/><br/>
    <label>Dob:</label>
    <input type='date' id='dob' name='dob' value={data.dob} onChange={handleChange}/><br/><br/>
    <input type='submit' value="Update"/>
    <button><Link to='/'>Go Back</Link></button>
  </form>
  )
}

export default Update