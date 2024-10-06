import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const AddUsers = () => {
    const [user,setUser] = useState({name:"",username:"",email:""});
    const navigate = useNavigate();
    const change=(e)=>{
        setUser({...user,[e.target.name]: [e.target.value]})
    }
    function Add(e){
        e.preventDefault();
        axios.post('http://localhost:2028/users',user).then(()=>{
            navigate("/")
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  return (
    <div id="profile-container">
        <h1 id="profile-header">Add a New Users</h1>
        <form id="profile-form">
            <input 
            id="username-input"
            type="text"     
            name="name" 
            placeholder='name'
            value={user.name}
            onChange={change}
            />
            <input 
            id="username-input"
            type="text" 
            name="username" 
            placeholder='username'
            value={user.username}
            onChange={change}
            />
            <br/>   
            <input 
            id="email-input"
            type="email" 
            name="email" 
            placeholder='email'
            value={user.email}
            onChange={change}
            />
            <br/>
            <input id="btn" onClick={Add} type="submit" value="Submit" />

        </form>
    </div>
  )
}
export default AddUsers
