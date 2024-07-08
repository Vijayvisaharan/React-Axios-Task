
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Home () {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserUpdate = () => {
    fetchUsers();
  };

  const updateBtn = (id) => {
    navigate(`/edituser/${id}`);
  };

  const listBtn = () => {
    navigate("/userlist");
  };

  const addUserBtn = () => {
    navigate("/adduser");
  };


  return (
    <>
      <div className='container justify-content space-between '>
        <button className="btn btn-success m-3"
          onClick={listBtn}><h1>Users List</h1></button>
        <button className="btn btn-primary m-3" onClick={addUserBtn}><h1>Add User</h1></button></div>
      <div className="main">
        <div className='container '>
          <div className='row'>

            {users.map((user) => (
              <div className="col-lg-4" key={user.id}>
                <div className="card mt-5" style={{ width: "26rem", height: "27rem", backgroundColor: '#ccffee' }}>

                  <div className="card-body">
                    <p><b>Name:</b>   {user.name}</p>
                    <p> <b>Username:</b>  {user.username}</p>
                    <p> <b>Email:</b> {user.email}</p>
                    <p> <b>Address:</b>  {user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode},{user.address.geo.lat},{user.address.geo.lng}.</p>
                    <p><b>Phone:</b>   {user.phone}</p>
                    <p> <b>Website:</b> <a href="">{user.website}</a></p>
                    <p><b>Company Name:</b>   {user.company.name}, {user.company.catchPhrase}, {user.company.bs} </p>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                      <button className="btn btn-success m-3"
                        onClick={() => updateBtn(user.id)}>UPDATE</button>
                      <button className="btn btn-danger m-3"
                        onClick={() => deleteUser(user.id)}>Delete</button>
                    </div>

                  </div>
                </div>
              </div>



            ))}


          </div>
        </div>
      </div>


    </>
  );
}

export default Home;
