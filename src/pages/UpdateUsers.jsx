import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
const UpdateUsers = () => {
    const [user,setUser] = useState({name:"",username:"",email:""});
    const navigate = useNavigate();
    const change=(e)=>{
        setUser({...user,[e.target.name]: [e.target.value]})
    }
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:2028/users/${id}`).then(res=>{
            setUser(res.data)
        })
        .catch(err=>console.error(err));
    },[])
    function Update(e){
        e.preventDefault();
        axios.put(`http://localhost:2028/users/${id}`,user).then(()=>{
            navigate(`/`)
        }).catch(err=>console.error(err));
        console.log(user);
    }
  return (
    <div id="profile-container">
        <h1 id="profile-header">Edit Profile</h1>
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
             <input  id="btn" type='submit' value="Update" onClick={Update}/>

        </form>
    </div>
  )
}
export default UpdateUsers
