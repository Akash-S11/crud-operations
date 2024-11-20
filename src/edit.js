import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link , useParams, useNavigate} from 'react-router-dom';


const Edit = () =>{
  const [data, setData] = useState({
    email: "",
    first_name: "",
    last_name: ""
});
  const {id} = useParams();
  const navigate = useNavigate();
  
useEffect (() => {
  axios.get(`https://reqres.in/api/users/${id}`)
  .then(res => setData(res.data.data))
  .catch(err => console.log(err));
},[id])

const handleChange = (e) => {
  const { name, value } = e.target;
  setData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  axios
    .put(`https://reqres.in/api/users/${id}`, data)
    .then((res) => {
      console.log("User updated:", res.data);
      navigate("/"); 
    })
    .catch((err) => console.log(err));
};

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-100">
      <div className="w-1/2 max-w-lg bg-white p-6 shadow-lg rounded">
        <h1 className="text-2xl font-semibold mb-6 text-center">Update User Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Email:</label>
            <input type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">FirstName:</label>
            <input type="text"
              name="first_name"
              value={data.first_name}
              onChange={handleChange}
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter FirstName"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">LastName:</label>
            <input type="text"  
             name="last_name"
             value={data.last_name}
             onChange={handleChange}
             className="form-control w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter LastName"
            />
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="btn bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Submit
            </button>
            <Link to="/" className="btn bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 ml-3">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
