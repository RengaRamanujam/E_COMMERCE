import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( '/api/auth/register', {name, email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                toast.success("Registered successfully")
                setTimeout(() => {
                    
                    navigate('/login');
                }, 3000);
            }
            
        })
        .catch(err => console.log(err));
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-cyan-400 to-light-blue-500">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className='mb-4 text-2xl text-center text-primary'>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold">Name</label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            className="block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary p-2"
                            id="name" 
                            onChange={(event) => setName(event.target.value)}
                            required
                        /> 
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold">Email Id</label>
                        <input 
                            type="email" 
                            placeholder="Enter Email"
                            className="block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary p-2"
                            id="email" 
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        /> 
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-semibold">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter Password"
                            className="block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary p-2"
                            id="password" 
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary">Register</button>
                </form>
                <p className='mt-4 text-center'>Already have an account? <Link to='/login' className="text-primary">Login</Link></p>
            </div>
            <ToastContainer autoClose={4000} />
        </div>
    )
}

export default Register;
