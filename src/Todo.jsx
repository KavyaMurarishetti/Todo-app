import React, { Fragment, useState } from 'react'
import "./Todo.css"

const Todo = () => {
    let [inputValue,setInputValue]=useState("")
    let [listItem,setListItem]=useState([])
    let [editIndex,setEditIndex]=useState(null)
    let handleInput=(e)=>{
        setInputValue(e.target.value)
    }
   let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputValue);

   }
   let handleAdd=()=>{
    if(inputValue!=="")
    {
        if(editIndex!==null)
        {
            listItem[editIndex]=inputValue;
            setEditIndex(null)
        }
        else{
            setListItem([...listItem,inputValue])
        }
        setInputValue("")
    }
   }
   let handleClear=()=>{
    setListItem([])
   }
   let handleDelete=(id)=>{
    let newList=listItem.filter((val,index)=>{
        return(index!=id)
    })
    setListItem(newList)
   }
   let handleEdit=(id)=>{
    setInputValue(listItem[id])
    setEditIndex(id)
   }

   
  return (
    <>
    <div id='maindiv'>
    <h1>To Do App</h1>
    <form onSubmit={ handleSubmit} autoComplete='off'>
        <input type="text" name="inputValue" placeholder='add Item.......' id="inputValue" value={inputValue} onChange={handleInput}/>
        <button onClick={handleAdd} id='add'>{editIndex!==null?"UpdateItem":"AddItem"}</button><br/>
    </form>
    <section>
        {
            [listItem.map((val,index)=>{
                return(
                    <Fragment key={index}>
                    
                    <h5>{val}</h5>
                    
                    <button onClick={()=>handleEdit(index)}>Edit</button>

                    <button onClick={()=>handleDelete(index)}>Delete</button>
                    
                    </Fragment>
                )
            })]
        }
    </section>
    <button onClick={handleClear} id='clear'>Clear All</button>
    </div>
    </>
    
  )
}

export default Todo
