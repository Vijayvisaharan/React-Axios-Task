
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { MdSystemUpdateAlt,MdDeleteForever } from 'react-icons/md';

function Userlist (){
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.log(error);
    }

  };

 const updateBtn = (id) => {

    navigate(`/edituser/${id}`);
  };
  const addBtn = () => {

    navigate("/adduser" );
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
    <div className="container container-fluid ">
     <Container className="user1" >
      <Button className="user2 btn btn-primary mt-4" onClick={addBtn}>
        ADD User
      </Button>
      <table className="user3 table mt-5">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col">Company</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
       
        <tbody className="user4">
          {
            
            users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
            
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td>
                  <MdSystemUpdateAlt
                    onClick={() => updateBtn(user.id)}
                    className="user6 fs-3 text-info"
                  />
                </td>
                <td>
                  <MdDeleteForever
                    onClick={() => deleteUser(user.id)}
                    className="user7 fs-3 text-danger"
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
    </div>
      
    </>
  );
};

export default Userlist;

