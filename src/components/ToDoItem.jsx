import React from 'react'
import { FileEdit } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import '../styles/ToDo.css'

const ToDoItem = ({ title, description, deleteHandler, id, updateHandler, isCompleted }) => {
  return (
    <div id={(isCompleted)?"item-complete":'item'}>
      <div id="header">
        <input type="checkbox" name="isComplete" id="isComplete" checked={isCompleted} onChange={() => updateHandler(id)} />
        <div id="titleCard">{title}</div>
      </div>
      <div id="descCard">{description}</div>
      <div id="lower">
        <button className='updateIcon'><FileEdit /></button>
        <button className='updateIcon' onClick={() => deleteHandler(id)}><Trash2 color="maroon" /></button>
      </div>
    </div>
  )
}

export default ToDoItem
