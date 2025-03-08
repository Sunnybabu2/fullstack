import logo from './logo.svg';
import {useEffect,useState} from 'react'
import {createServer} from 'miragejs'
import './App.css';

createServer({
  routes(){
    this.get("/api/users",()=>{
      return [{
        id:1,
        name:'Deepa'
      },
    {
      id:2,
      name:'Sunny'
    }]
    })
  }
})

// type User={
//   id:number;
//   name:string;
// }
function App() {
  const [users,setUsers]=useState([]);
  
  useEffect(()=>{
    fetch("/api/users")
    .then((r)=>r.json())
    .then((users)=>setUsers(users))
    
  },[])
  return (
    <div className="App">
     {
       users.map(user=> <div key={user.id}>{user.name}</div>)
     }
    </div>
  );
}

export default App;
