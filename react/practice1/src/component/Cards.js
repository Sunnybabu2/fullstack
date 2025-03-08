import {useState} from 'react'
import Card from 'react-bootstrap/Card';
import { add ,remove } from '../store/cardslice';
import {useDispatch,useSelector} from 'react-redux'
import Badge from './Badge'



const Cards = () => {
  const [item,setItem] =useState("")
  // const [tasks,setTasks] =useState([]);

      const tasks = useSelector(state=>state.card);
  
  const dispatch=useDispatch();

  const deleteProduct=(name)=>{
    dispatch(remove(name));
  }

  const submitHandler=(e)=>{
     e.preventDefault();
     if(item !==" ")
     {
       dispatch(add({name : item}))
       setItem(" ");
     }
    //  const newTask=[...tasks,item];
    //  setItem(" ");
    //  setTasks(newTask);
     
  }
  return (
    <div>
     <center style={{paddingTop:'90px'}}>
      <Badge/>
        <Card style={{width:"18rem",height:'40rem'}}>
        <form onSubmit={submitHandler}>
         <input type="text" placeholder='Add Products' value={item} onChange={e=>setItem(e.target.value)}/><br/><br/>
         <button type="submit" className='btn btn-success'>Add Product</button>
      </form>
      <br/>
        {
           tasks.map((task)=>{
             return(
              <div>
                <span>{task.name}</span><span ><button className='btn btn-danger' onClick={()=>deleteProduct(task.name)}>Delete Product</button></span><br/><br/>
              </div>
             )
           })
        }
        </Card>
     </center>
    </div>
  )
}

export default Cards