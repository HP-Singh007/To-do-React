import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from "react"

export const server = "https://hps-todoapp.onrender.com/api/v1";

export const Context = createContext({});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState('');

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
        setEditId
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
