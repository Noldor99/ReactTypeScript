import React, { useEffect, useState } from 'react'
import APIservice from '../API/APIservice'
import List from '../components/List'
import TodoItem from '../components/TodoItem'
import { ITodo } from '../types/types'
import TodoItemPage from './TodoItemPage'

const TodosPage = () => {
  const [todo, setTodo]=useState<ITodo[]>([])


  async function fetchUserc(){
    try{
      const response = await APIservice.todos()
      setTodo(response.data)
    }catch(e){
      alert(e)
    }
  }

  useEffect(()=>{
    fetchUserc()
  },[])


  return (
    <List 
    items={todo}
    renderItem={(todo)=>
      <TodoItem
        todo={todo}
        key={todo.id}
    />
  }/>
  )
}

export default TodosPage