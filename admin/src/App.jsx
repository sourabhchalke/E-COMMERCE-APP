
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import { Routes,Route } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';

export const backendUrl = process.env.REACT_APP_BACKEND_URL;
console.log("URL : ",backendUrl);

function App() {

  const [token,setToken] = useState(''?'':localStorage.getItem('token'));

  useEffect(()=>{
    localStorage.setItem('token',token);
  },[token])

  return (
    <div className="bg-gray-50 min-h-screen">

    <ToastContainer />

    {/* Checking If user is authorized or not */}

    { token === "" 
    ? <Login setToken={setToken}/>  
    :
     <>
        <Navbar setToken={setToken}/>
        <hr />
        <div className="flex w-full">
          <Sidebar/>
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='/add' element={<Add token={token}/>}/>
              <Route path='/list' element={ <List token={token}/> }/>
              <Route path='/orders' element={<Orders token={token}/>}/>
            </Routes>
          </div>
        </div>
      </> }
      
    </div>
  );
}

export default App;
