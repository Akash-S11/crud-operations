import React, {useState , useEffect} from 'react';
import { useParams , Link } from 'react-router-dom';
import axios from "axios";

const View = () =>{
  const [data, setData] = useState([]); //null
  const {id} = useParams();
  
useEffect (() => {
  axios.get(`https://reqres.in/api/users/${id}`)
  .then(res => setData(res.data.data))
  .catch(err => console.log(err));
},[])
  return (
      <div className="flex w-full h-screen justify-center items-center bg-gray-100">
        <div className="w-1/2 border bg-white shadow-md px-10 py-6 rounded">
          <h3 className="text-lg font-semibold mb-4">Detail of User</h3>
          <div className="mb-2">
            <strong>Email: {data.email}</strong>
          </div>
          <div className="mb-2">
            <strong>FirstName: {data.first_name}</strong>
          </div>
          <div className="mb-3">
            <strong>LastName: {data.last_name}</strong>
          </div>
          <div className="flex space-x-4">
            <Link to={`/edit/${id}`} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Edit</Link>
            <Link to="/"className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Back</Link>
          </div>
        </div>
      </div>
    );
}

export default View;
