import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from '../utils/StatusCode'
import { createServer } from "miragejs";
// import routes from "../mirageserver/routes";


import product from '../mirageserver/product.json'

const initialState={
    data:[],
    status:StatusCode.IDLE,
};

const productSlice= createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder 
          .addCase(getProducts.fulfilled,(state,action)=>{
            state.status=StatusCode.IDLE;
            state.data=action.payload;
          })
          .addCase(getProducts.pending,(state,action)=>{
            state.status=StatusCode.LOADING;
          })
          .addCase(getProducts.rejected,(state,action)=>{
            state.status=StatusCode.ERROR;
          })
    }
})


export default productSlice.reducer;

export const getProducts=createAsyncThunk('/products/get' , async()=>{
    const data=await fetch('api/products')
    const result= await data.json();
    return result;
})


  createServer({
      routes(){
      //    this.passthrough("api/products");
         this.namespace="api"
      this.get("/products",()=>{
          return product;   
          
      })
       
      }
  })
  // return server;
