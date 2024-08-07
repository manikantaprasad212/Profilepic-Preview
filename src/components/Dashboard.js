import React from 'react'   
import Topnavigation from './Topnavigation'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='App'>
      <h1>Dash Board</h1>
      <Topnavigation></Topnavigation>
     
    </div>
  )
}

export default Dashboard