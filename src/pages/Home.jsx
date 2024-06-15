import '../styles/Home.css'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { Context, server } from '../index';
import { PlusCircle } from 'lucide-react';
import ToDoItem from '../components/ToDoItem';
import broom from '../images/broom.png'
import axios from 'axios';

const Home = () => {
  const { isAuthenticated, setIsEditing, setEditId, setNewTitle, setNewDesc } = useContext(Context);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState();
  const [creating, setCreating] = useState(false);
  const [description, setDesciption] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try{
      setCreating(true);
      const { data } = await axios.post(`${server}/tasks/new`, {
        title, description
      },
      {
        withCredentials: true,
      });
      toast.success(data.message);
      setTitle("");
      setDesciption("");
      setTimeout(() => {
        setCreating(false);
      }, 2000);
    }

    catch (error) {
      console.log(error);
      setCreating(false);
    }
  }

  const deleteHandler = (id) => {
    axios.delete(`${server}/tasks/${id}`, {
      withCredentials: true,
    })
    .then((res) => {
      toast.success(res.data.message);
    })
    .catch((error) => {
      toast.error(error.response.data.message)
    })
  }

  const editHandler = (id, Title, Desc) => {
    setIsEditing(true);
    setEditId(id);
    setNewTitle(Title);
    setNewDesc(Desc);
  }

  const updateHandler = (id) => {
    axios.put(`${server}/tasks/${id}`, {}, {
      withCredentials: true,
    })
  }

  useEffect(() => {
    axios.get(`${server}/tasks/my`, {
      withCredentials: true,
    })
      .then((res) => {
        setTasks(res.data.tasks);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  })

  if (!isAuthenticated) {
    return <Navigate to="/To-do-React/login" />
  };

  return (
    <div id='home'>
      <div id='addTask'>

        <form onSubmit={submitHandler}>
          <input 
            id="title" 
            type="text" 
            placeholder='Title' 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
          <input 
            id="desc" 
            type="text" 
            placeholder='Description' 
            value={description} 
            onChange={(e) => setDesciption(e.target.value)} 
            required 
          />
          <button 
            type='submit' 
            disabled={creating}>
              <PlusCircle color='white' />
          </button>
        </form>

      </div>

      <div>
        <img src={broom} alt="..." id={creating ? "broom" : "no-broom"} />
      </div>

      <div id='showTask'>
        {tasks.map((i) => 
          (
            <ToDoItem 
              title={i.title} 
              description={i.description} 
              deleteHandler={deleteHandler} 
              editHandler={editHandler} 
              id={i._id} 
              Title={i.title} 
              Desc={i.description} 
              updateHandler={updateHandler} 
              isCompleted={i.isCompleted} 
              createdAt={i.createdAt} 
              />
          )
        )}
      </div>
    </div>
  )
}

export default Home
