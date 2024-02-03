import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('User signed up successfully!');
      } else {
        console.error('Failed to sign up. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  return (
    <>
      <div className="flex h-screen bg-slate-800">
        <div className="flex bg-slate-400 w-72 h-72 justify-center m-auto">
          <div className="flex flex-col m-auto">

            <label>Email:</label>
            <input
              type="email"
              // placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password:</label>
            <input
              type="password"
              // placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp} className="bg-blue-200 p-1 m-2 rounded-md" type="submit">Sign Up</button>

            <Link to="/login"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Login</button></Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;