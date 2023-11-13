import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {
    let [user,setUser]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((result)=>setUser(result.data))
        .catch((error)=>console.log(error))
    },[])

    let handleDelete=(id)=>{
        axios.delete("http://localhost:3000/users/"+id)
        .then(()=>{
            console.log("Deleted successfully");
            window.location.reload()
        })
    }
  return (
    <>
    <button><Link to='/create' >Add</Link></button>
    <table>
        <thead>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Place</td>
            <td>Age</td>
            <td>Dob</td>

        </tr>
        </thead>
        <tbody>
        {
            user.map((val)=>{
                return (
                <React.Fragment key={val.id}>
                <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.place}</td>
                    <td>{val.age}</td>
                    <td>{val.dob}</td>
                    <td><button><Link to={`/read/${val.id}`}>Read</Link></button></td>
                    <td><button><Link to={`/update/${val.id}`}>EDIT</Link></button></td>
                    <td><button onClick={()=>handleDelete(val.id)}>Delete</button></td>
                </tr>
                </React.Fragment>
                )
                }
            )
        }
        </tbody>
    </table>
    </>
  )
}

export default Home