import {createAsyncThunk} from '@reduxjs/toolkit'
// import axios from 'axios'

const getAllProductsURL='/allproducts'; 

export const fetchAllproducts=createAsyncThunk('products/get' , async()=>{
    const data=await fetch(getAllProductsURL)
    const result= await data.json();
    return result;

//     let response ='';
// try{
//     await axios.get(getAllProductsURL)
//     .then((res)=>{
//       response=res;
//     });
//     console("data",response);
    
//     // return response;
//   }catch(err)
//   {
//     return Promise.reject(err);
//   }
    
  

})