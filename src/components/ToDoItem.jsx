import { Context } from '../index';
import React, { useContext } from 'react'
import { FileEdit } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import '../styles/ToDo.css'

const ToDoItem = ({ title, description, deleteHandler,  editHandler,id, updateHandler, isCompleted ,Title , Desc , createdAt}) => {

const { theme } = useContext(Context);
  
  return (
    <div id={(isCompleted)?"item-complete":'item'} className={!theme?'itemNormal':''}>

      <div id="header">
        <input 
          type="checkbox" 
          name="isComplete" 
          id="isComplete" 
          checked={isCompleted} 
          onChange={() => updateHandler(id)} 
        />
        <div id="titleCard">{title}</div>
      </div>

      <div id="descCard">{description}</div>
      
      <div id="lower">
        <div id="lowerLeft">{new Date(createdAt).toDateString()}</div>
        <div id="lowerRight">
          <button 
            className='updateIcon' 
            onClick={()=>editHandler(id , Title , Desc)}>
              <FileEdit />
          </button>
          <button 
            className='updateIcon' 
            onClick={() => deleteHandler(id)}>
              <Trash2 color="maroon" />
          </button>
        </div>
      </div>

    </div>
  )
}

export default ToDoItem
