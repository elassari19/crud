import React, { useContext } from 'react'
import { store} from '../context/Context'

const Input = () => {

  const {handleInput, input, handleSubmit} = useContext(store);

  return (
    <form onSubmit={e=>handleSubmit(e)}>
      <input name='add_course' value={input} onChange={(e)=>handleInput(e)} type="text" required />
      <input type="submit"/>
    </form>
  )
}

export default Input
