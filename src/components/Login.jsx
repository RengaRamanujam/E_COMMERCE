import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }
    
        try {
            const response = await axios.post(`/api/auth/login`, { email, password });
            if (response.status === 200) {
                navigate('/');
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    }
    

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-cyan-400 to-light-blue-500">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className='mb-4 text-2xl text-center text-primary'>Login</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary hidden">Login</button>
                </form>
                <p className='mt-4 text-center'>Don't have an account? <Link to='/signup' className="text-primary">Register</Link></p>
            </div>
            <ToastContainer autoClose={4000} />
        </div>
    )
}

export default Login;
