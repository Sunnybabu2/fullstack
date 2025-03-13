import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from '../utils/StatusCode'
import {fetchAllproducts} from '../mirageserver/service'
// import axios from 'axios'
// import { createServer } from "miragejs";
// import mirageServer from '../mirageserver/pointserver'
// import products from '../mirageserver/products.json'


const initialState={
    data:[],
    status:StatusCode.IDLE,
}

const ProductSlice= createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder 
          .addCase(fetchAllproducts.fulfilled,(state,action)=>{
            state.status=StatusCode.IDLE;
            state.data=action.payload;
          })
          .addCase(fetchAllproducts.pending,(state,action)=>{
            state.status=StatusCode.LOADING;
          })
          .addCase(fetchAllproducts.rejected,(state,action)=>{
            state.status=StatusCode.ERROR;
          })
    }
})


export default ProductSlice.reducer;


// export const getProducts=createAsyncThunk('allproducts/get' , async()=>{
//     // const data=await fetch('api/allproducts')
//     // const result= await data.json();
//     // return result;
//     let response;

//     await axios.get('api/allproducts')
//     .then((res)=>{
//       response=res;
//     })
//     return response
// })
// createServer({
//   routes(){
//   //    this.passthrough("api/products");
//      this.namespace="api"
//      this.get("/products",()=>{
//       return products;   
      
//   })
//   // routes.forEach((route)=>{
//   //     route(this);
//   // })
   
//   }
// })




