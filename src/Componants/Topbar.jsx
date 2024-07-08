import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          < Link to="/" className="nav-link" ><h1><b>Home</b></h1>
           
          </Link >
          {/* < Link to="/" className="nav-link" ><h1><b>UsersList</b></h1>
           
          </Link > */}
          
          <h1 style={{color:'green'}}><b>CRUD</b></h1>
          
          <Link to="/adduser" className="nav-link">
          <h1><b>Add User</b></h1>
          </Link>
        </div>
      </nav>


    </>
  )
}

export default Topbar
