import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp'

function App() {
  return (
    // <div>
    //   <h1>Let's Go</h1>
    // </div>
    <Routes>
      <Route path='/' element={<Welcome/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      {/* <Route path='/web-internal/home' element={<Home/>}></Route> */}
    </Routes>
  );
}

export default App;
