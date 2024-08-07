import React from 'react'
import { Link } from 'react-router-dom'

function Topnavigation() {
  return (
    <nav>

        <Link to="/Dashboard">Dashboard</Link>
        <Link to ="/">Login</Link>
        <Link to="/PageNotFound">PageNotFound</Link>
        <Link to="/IndianCricket">IndianCricket</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/Money">Money</Link>
        <Link to="/Politics">Politics</Link>
        <Link to="/">Signout</Link>
    </nav>
  )
}

export default Topnavigation