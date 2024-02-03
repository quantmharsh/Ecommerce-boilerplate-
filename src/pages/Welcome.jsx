import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'

const Welcome = () => {
  return (
    <>
      <div className="flex m-auto justify-center items-center bg-slate-800">
        <SignUp />
      </div>
    </>
  )
}

export default Welcome