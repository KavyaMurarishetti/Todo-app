import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  let [user,setUser]=useState([])
  let {id}=useParams()

    useEffect(()=>{
        axios.get("http://localhost:3000/users/"+id)
        .then((result)=>setUser(result.data))
        .catch((error)=>console.log(error))
    },[])
  return (
    <>
    <h1>{user.id}</h1>
    <h1>{user.name}</h1>
    <h1>{user.age}</h1>
    <h1>{user.place}</h1>
    <h1>{user.dob}</h1>
    <button><Link to={`/update/${user.id}`}>EDIT</Link></button>
    <button><Link to={"/"}>GO BACK</Link></button>
    </>
  )
}

export default Read