import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import TodosPage from '../Page/TodosPage'
import UserItemPage from '../Page/UserItemPage'
import UsersPage from '../Page/UsersPage'

const AppRouter = () => {
  return (
    
    <Routes>
      <Route path='/users/:id' element={<UserItemPage/>}/>
      <Route path='/todos/:id' element={<TodosPage/>}/>
      <Route path='/users' element={<UsersPage/>}/>
      <Route path='/todos' element={<TodosPage/>}/>
      
    </Routes>
  )
}

export default AppRouter