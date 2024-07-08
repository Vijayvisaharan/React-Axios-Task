import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate,useLocation } from 'react-router-dom';


function  EditUser () {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { handleUserUpdate } = location.state || {};
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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      const keys = name.split('.');
      if (keys.length === 2) {
        return {
          ...prevUser,
          [keys[0]]: {
            ...prevUser[keys[0]],
            [keys[1]]: value,
          },
        };
      } else if (keys.length === 3) {
        return {
          ...prevUser,
          [keys[0]]: {
            ...prevUser[keys[0]],
            [keys[1]]: {
              ...prevUser[keys[0]][keys[1]],
              [keys[2]]: value,
            },
          },
        };
      }
      return { ...prevUser, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
      if (handleUserUpdate) handleUserUpdate();
      alert('User updated successfully!');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
    console.log()
  };


  return (
    <div>
      <div className='container justify-content-center'>
      <div class="row align-items-center">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit} className="form1">
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
        <div className="update2 col-sm-12">
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
        <div className="update3 col-sm-12">
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
        <div className="update4 col-sm-12">
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
        <div className="update5 col-sm-12">
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
        <div className="update6 col-sm-12">
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
        <div className="update7 col-sm-12">
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
        <div className="update8 col-sm-12">
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
        <div className="update9 col-sm-12">
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
        <div className="update10 col-sm-12">
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
        <div className="update11 col-sm-12">
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
        <div className="update12 col-sm-12">
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
        <div className="update13 col-sm-12">
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
        <div className="update14 col-sm-12">
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
    </div>
  );
};

export default EditUser;



