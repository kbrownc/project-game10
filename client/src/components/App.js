import React, { useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../contexts/ContactsProvider';
//import io from 'socket.io-client';

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
      <ContactsProvider>
        <Dashboard id={id} />
      </ContactsProvider>
    )

  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  )
};

export default App;
