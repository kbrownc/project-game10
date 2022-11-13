import React, { useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';
//import io from 'socket.io-client';

function App() {
  const [id, setId] = useLocalStorage('id');
  return (
    id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
  )
};

export default App;
