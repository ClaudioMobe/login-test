import React, { useState } from 'react';
import Login from './components/Login';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className='app'>
      {!isAuth ? <Login setIsAuth={setIsAuth}/>  : <Form/>}
    </div>
  );
}
 
export default App;