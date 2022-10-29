import axios from "axios"
import { ITodo, IUser } from "../types/types"

export default class APIservice{
  static async todos(){
    const response =await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    return response
  }

 static async users(){
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    return response
 }
}
   
   
   
   
   

