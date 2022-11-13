import React, { useState, useEffect } from 'react';
import Login from './Login';
//import io from 'socket.io-client'; 

function App() {
  const [id, setId] = useState('');
  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
