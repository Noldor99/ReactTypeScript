import React from 'react'
import { Route } from 'react-router-dom'
import TodosPage from './Page/TodosPage'
import UsersPage from './Page/UsersPage'
import AppRouter from './router/AppRouter'
import Navbar from './router/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App