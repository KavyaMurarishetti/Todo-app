import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

const Create = () => {
  let [data,setData]=useState({
    name:"",
    place:"",
    age:"",
    dob:""
  })
  let navigate=useNavigate()
  let {name,place,age,dob}=data
  let handleChange=(e)=>{
    let {name,value}=e.target
    setData({...data,[name]:value})
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,place,age,dob)
    axios.post("http://localhost:3000/users",data)
    .then((val)=>{
      console.log("success");
      navigate("/")
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type='text' id='name' name='name' value={name} onChange={handleChange}/><br/><br/>
      <label>Place:</label>
      <input type='text' id='place' name='place' value={place} onChange={handleChange}/><br/><br/>
      <label>Age:</label>
      <input type='tel' id='age' name='age' value={age} onChange={handleChange}/><br/><br/>
      <label>Dob:</label>
      <input type='date' id='dob' name='dob' value={dob} onChange={handleChange}/><br/><br/>
      <input type='submit' value="Submit"/>
      <button><Link to='/'>Go Back</Link></button>
    </form>
  )
}

export default Create