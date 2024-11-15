import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const Body = () => {
  const [data, setData] = useState([])

useEffect (() => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(res => setData(res.data))
  .catch(err => console.log(err));
},[])

  return (
    <div>
        <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">List of users</h1>
            <div className="w-3/4 rounded bg-white border shadow p-6">
              <table>
                  <tr>
                    <th>id</th>
                    <th>body</th>
                    <th>title</th>
                  </tr>
                <tbody>
                    {
                      data.map((data, i) => (
                        <tr key={i}>
                        <td>{data.id}</td>
                        <td>{data.body}</td>
                        <td>{data.title}</td>
                        <td>
                            <button className="btn btn-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">Edit</button>
                            <button className="btn btn-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
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
