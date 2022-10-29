import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/users">users</Link>
      <Link to="/todos">todos</Link>
    </div>
  )
}

export default Navbar