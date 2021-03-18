import React, { useContext } from 'react'
import { store } from '../context/Context'
import ItemList from './ItemList';

const Langueges = () => {

  const {language} = useContext(store);

  return (
    <div className='container'>
      {language.length>0&&language.map(item=><ItemList course={item.course} id={item.id} edit={item.isEdit} />)}

      {language.length===0&&<div id='null' className='item' >No course exist</div> }
    </div>
  )
}

export default Langueges
