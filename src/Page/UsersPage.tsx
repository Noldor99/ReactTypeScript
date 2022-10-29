import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import APIservice from '../API/APIservice'
import List from '../components/List'
import UserItem from '../components/UserItem'
import { useLocation, useNavigate } from 'react-router-dom'

const UsersPage:FC = () => {
  const [userc, setUsers]=useState<IUser[]>([])
  const navigate=useNavigate()

  // const respons = await APIservice.users()

  async function fetchUserc(){
    try{
      const response = await APIservice.users()
      setUsers(response.data)
    }catch(e){
      alert(e)
    }
  }

  useEffect(()=>{
    fetchUserc()
  },[])

  return (
    <>
    <List 
      items={userc}
      renderItem={(user)=>
        <UserItem
          user={user}
          onClick={(user)=>navigate('/users/'+user.id)}
          key={user.id}
      />
    }/>

     </>
  )
  
   

}

export default UsersPage
