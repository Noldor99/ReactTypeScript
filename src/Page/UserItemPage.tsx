import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IUser } from '../types/types';

interface UserItemPageParams {
    id: String
}

const UserItemPage: FC = () => {
    const navigate =useNavigate()

    const [user, setUser]=useState <IUser | null>(null)
    const params = useParams()


    async function fetchUser(){
        
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        setUser(response.data)
    }
    
    useEffect(()=>{
        fetchUser()
    },[])

    return (
        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
}

export default UserItemPage
