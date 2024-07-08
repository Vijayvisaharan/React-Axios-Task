import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function  AddUser(){
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    if (keys.length === 1) {
      setUser({ ...user, [name]: value });
    } else if (keys.length === 2) {
      setUser({ ...user, [keys[0]]: { ...user[keys[0]], [keys[1]]: value } });
    } else if (keys.length === 3) {
      setUser({
        ...user,
        [keys[0]]: {
          ...user[keys[0]],
          [keys[1]]: { ...user[keys[0]][keys[1]], [keys[2]]: value },
        },
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response= await axios.post('https://jsonplaceholder.typicode.com/users', user);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
return (
    <>
      <div className='container justify-content-center'>
      <div className="row align-items-center">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
      <div class="row g-3 align-items-center">
      <div class="col-auto">
        
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
             
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
             
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            Street:
            <input
              type="text"
              name="address.street"
              value={user.address.street}
              onChange={handleChange}
             
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            Suite:
            <input
              type="text"
              name="address.suite"
              value={user.address.suite}
              onChange={handleChange}
             
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            City:
            <input
              type="text"
              name="address.city"
              value={user.address.city}
              onChange={handleChange}
              
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            Zipcode:
            <input
              type="text"
              name="address.zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
              
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            Latitude:
            <input
              type="text"
              name="address.geo.lat"
              value={user.address.geo.lat}
              onChange={handleChange}
             
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            Longitude:
            <input
              type="text"
              name="address.geo.lng"
              value={user.address.geo.lng}
              onChange={handleChange}
             
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
             
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            Website:
            <input
              type="text"
              name="website"
              value={user.website}
              onChange={handleChange}
            
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            Company Name:
            <input
              type="text"
              name="company.name"
              value={user.company.name}
              onChange={handleChange}
              
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            CatchPhrase:
            <input
              type="text"
              name="company.catchPhrase"
              value={user.company.catchPhrase}
              onChange={handleChange}
           
              required
            />
          </label>
        </div>
        <div className="col-sm-12">
          <label>
            BS:
            <input
              type="text"
              name="company.bs"
              value={user.company.bs}
              onChange={handleChange}
              
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default AddUser
