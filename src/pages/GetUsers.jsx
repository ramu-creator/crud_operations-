import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
const GetUsers = () => {
    const [state,setState] = useState([]);
    const [table,setTable] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:2028/users')
       .then(res => {
        
        setState(res.data);
        setTable(Object.keys(res.data[0]).slice(0,4));

       })
       .catch(err => console.log(err))
    }, [state])
    function DeleteUser(id){
        axios.delete(`http://localhost:2028/users/${id}`)
       .then(() => {
        navigate('/')
        console.log('User deleted successfully');
       })
    }
    
  return (
    <>
       <table id="crud-table">
        <caption id="table-caption">
            <strong>CRUD OPERATIONS</strong>
            <button id="add-btn" onClick={()=>navigate("/add")}>ADD+</button>
        </caption>
        <thead>
            <tr>
               {table.map(item =><th key={item}>{item}</th>)}
                <th>Operations</th>
               
            </tr>
        </thead>
        <tbody>
            {state.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>
                        <Link to={`/update/${item.id}`}><button className="action-btn">Edit</button></Link>&nbsp;
                        <button className="action-btn" onClick={()=>DeleteUser(item.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
       </table>
    </>
  )
}

export default GetUsers
