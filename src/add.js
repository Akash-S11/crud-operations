import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Add() {
  const [item, setitems] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
  });
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("https://reqres.in/api/users", { 
      id: item.id, 
      email: item.email, 
      firstName: item.first_name,
      lastName: item.last_name, 
    })
    .then(res => {
      console.log(res);
      navigate("/");
    })
    .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='flex flex-col justify-center items-center bg-gray-100 min-h-5'>
        <h1 className="text-2xl font-bold mb-4" >Add a User</h1>
      <form onSubmit={handleSubmit}>
        <div  className='flex flex-col justify-center items-center bg-gray-100 min-h-5'>
            <label className="text-1xl mb-2">Enter Id:</label>
            <input type='text' placeholder='ID' value={item.id} onChange={e => setitems({...item, id:e.target.value})}></input>
            <label className="text-1xl mb-2">Enter Email:</label>
            <input type='text' placeholder='Email' value={item.email} onChange={e => setitems({...item, email:e.target.value})}></input>            
            <label className="text-1xl mb-2">Enter FirstName:</label>
            <input type='text' placeholder='FirstName' value={item.first_name} onChange={e => setitems({...item, first_name:e.target.value})}></input>
            <label className="text-1xl mb-2">Enter LastName:</label>
            <input type='text' placeholder='LastName' value={item.last_name} onChange={e => setitems({...item, last_name:e.target.value})}></input> 
        </div>
        <button type='submit' className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 m-2">Submit</button>
      </form>
      </div>
    </div>
  )
}
export default Add;
