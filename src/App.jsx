import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Adduser from './Componants/Adduser'
import Edituser from './Componants/Edituser'
import Userlist from './Componants/Userlist'
import { useState } from 'react';
import Topbar from './Componants/Topbar';
import Home from './Componants/Home';


function App() {
  
  
  return (
    <>
    
    <BrowserRouter>
    <Topbar/>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/userlist" element={<Userlist />}></Route>
      <Route path="/adduser" element={<Adduser />}></Route>
      <Route path="/edituser/:id" element={<Edituser />}></Route>
    </Routes>
    </div>
    </BrowserRouter>
      
    </>
  )
}

export default App


