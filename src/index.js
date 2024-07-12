import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from "react"

//server url
export const server = "https://hps-todoapp.onrender.com/api/v1";

export const Context = createContext({});

//Used this function because otherwise not be able to declare useState and give them to Context.Provider
const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState('');
  const[newTitle,setNewTitle]=useState('');
  const[newDesc,setNewDesc]=useState('');
  const [theme,setTheme]=useState(true);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        setIsLoading,
        isEditing,
        setIsEditing,
        editId,
        setEditId,
        newTitle,
        setNewTitle,
        newDesc,
        setNewDesc,
        theme,
        setTheme
      }}
    >
      <App />
    </Context.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
