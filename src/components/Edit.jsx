import React, { useContext, useEffect, useState } from 'react'
import { XCircle } from 'lucide-react';
import '../styles/Edit.css'
import { Context ,server} from '../index';
import axios from 'axios';
import { toast } from 'react-hot-toast';
const Edit = () => {
  const[newTitle,setNewTitle]=useState('');
  const[newDesc,setNewDesc]=useState('');
  const {isEditing,setIsEditing ,editId}=useContext(Context);

  const submitHandler=async(e)=>{
    e.preventDefault();
   try {
    const {data}=await axios.post(`${server}/tasks/update/${editId}`,{
      title:newTitle,
      description : newDesc
    },
    {
      withCredentials:true,
    })
    toast.success(data.message);
    setIsEditing(false);
    setNewTitle('');
    setNewDesc('');
   } catch (error) {
    console.log(error);
    setIsEditing(false);
   }
  }

  return (
    <div id={(isEditing)?"editBg":"editBg-none"}>
      <form id="editContainer" onSubmit={submitHandler}>
        <span onClick={()=>setIsEditing(false)}><XCircle color="red" /></span>
        <input type="text" placeholder='Title' value={newTitle} onChange={(e)=>{setNewTitle(e.target.value)}}/>
        <input type="text" placeholder='Description'value={newDesc} onChange={(e)=>{setNewDesc(e.target.value)}}/>
        <button type='submit'>Done</button>
      </form>
    </div>
  )
}

export default Edit
