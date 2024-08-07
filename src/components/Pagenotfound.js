import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <div className='App'>
        <h1>Page was not found</h1>
        <br></br>
        <Link to="/">Click here to go to Login</Link>
    </div>
  )
}

export default Pagenotfound