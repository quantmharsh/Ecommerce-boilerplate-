import React, { useState } from "react";

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:3000/signup', {
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
        <div className="flex bg-slate-400 w-72 h-72 justify-center m-auto rounded-md">
          <div className="flex flex-col m-auto">
            {/* <h2 className="font-sans text-base font-medium justify-center text-center">
              {
                signup ? <p>New User? Go to <Link to='/signup' className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-0.5 px-2 rounded">Sign Up</Link></p> : <p>Already have an account?<br></br> Go to <Link to='/login' className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-0.5 px-2 rounded">Log In</Link></p>
              }
            </h2> */}
            {/* <form id="signup-form" className="flex flex-col" onSubmit={handleSignUp}> */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleSignUp} className="bg-cyan-700 text-white text-xs justify-end fitems-end m-2 p-2 rounded-md" type="submit">Sign Up</button>
            {/* </form> */}

            <div id="error-messages"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;