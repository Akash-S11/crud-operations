import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate} from 'react-router-dom';
 
const Body = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
useEffect (() => {
  axios.get("https://reqres.in/api/users")
  //.then(res => console.log(res))
  .then(res => setData(res.data.data))
  .catch(err => console.log(err));
},[])

const handleDelete = (id) => {
  const confirm = window.confirm("Would you like to Delete?");
  if(confirm) {
  axios.delete(`https://reqres.in/api/users/${id}`)
  .then((res) => {
    //console.log("Deleted Data:", res.data);
    console.log("Deleted User ID:", id);
  navigate('/');
  }).catch(err=> console.log(err));
}
}

  return (
    <div>
        <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">List of Mobile names and specifications</h1>
            <div className="w-3/4 rounded bg-white border shadow p-6">
                <div className='flex justify-end'>
                  <Link to = "/add"> 
                  <button className="btn bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 m-2 ">Add</button>
                  </Link>
              </div>
              <table className="table-auto border-collapse border border-gray-200 w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Id</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">FirstName</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">LastName</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      data.map((data, index) => (
                        <tr className="border border-gray-300 px-4 py-2 text-left" key={index}>
                        <td className="border border-gray-300 px-4 py-2 text-left">{data?.id}</td>
                        <td className="border border-gray-300 px-4 py-2 text-left">{data?.email}</td>
                        <td className="border border-gray-300 px-4 py-2 text-left">{data?.first_name || "N/A"}</td>
                        <td className="border border-gray-300 px-4 py-2 text-left">{data?.last_name|| "N/A"}</td>
                        <td className="flex space-x-2">
                        <Link to={`/view/${data.id}`}> 
                            <button className="btn bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 m-2">View</button>
                        </Link>
                        <Link to ={`/edit/${data.id}`}> 
                            <button className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-2 ">Edit</button>
                        </Link>    
                        <Link>     
                            <button onClick={e => handleDelete(data.id)} className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 m-2">Delete</button>
                        </Link>
                        </td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </table>
          </div>
        </div>
    </div>
  )
}

export default Body;



