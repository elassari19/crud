import React, { useState } from 'react';
import Input from './crud/component/Input';
import Langueges from './crud/component/Langueges';
import { store } from './crud/context/Context';
import './crud/component/style.scss'
function App() {

  const [input, setInput] = useState('');
  const [language, setLanguage] = useState([])

// update input
  const handleInput = (e) => {
    let input = e.target.value;
    setInput(input);
  }

// add course
  const handleSubmit = (e) => {
    e.preventDefault();
    setLanguage(pre=>[...pre,{id:language.length,course:input,isEdit:false}]);
    setInput('');
  }

// edit course
  const handleDelete = (id) => {
    let lan = language.filter((item)=>item.id!==id)
    setLanguage(lan)
  }

// edit courses
  const handleEdit = (id) => {
    language.filter((item)=>{
      // after edit
      if(item.id===id){
        if(item.isEdit){
          return (item.course=input,
          item.isEdit=false,
          setInput(''))
          // start edit
        }else{
          return(item.isEdit=true,
          setInput(item.course))
        }
      }
    return id})
  }

  return (
    <div className="App">
      <store.Provider value={{handleInput, input, handleSubmit, language, handleEdit, handleDelete}}>
        <h1>Add Courses</h1>
        <Input />
        <Langueges />
      </store.Provider>
    </div>
  );
}

export default App;
