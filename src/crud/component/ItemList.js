import React, { useContext } from 'react'
import { store } from '../context/Context'

const ItemList = (props) => {

  const {handleDelete, handleEdit, handleInput, input} = useContext(store);
  return (
    <>
      {!props.edit&&
        (<div className='item' id={props.id}>
            <span>{props.course}</span>
            <span onClick={()=>handleEdit(props.id)}>Edit</span>
            <span onClick={()=>handleDelete(props.id)} >Delete</span>
          </div>)
      }
      {props.edit&&<div className='item' id={props.id}>
        <input type="text" value={input} onChange={(e)=>handleInput(e)} />
        <button onClick={()=>handleEdit(props.id)}>Update</button>
      </div> }
    </>
  )
}

export default ItemList
