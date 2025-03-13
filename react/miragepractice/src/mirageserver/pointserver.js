import { createServer } from "miragejs";
import routes from "./Data/routes";

 import getAllproducts from './getAllproducts.json'


function mirageServer(){

// const baseUrl='/api'
 let server=createServer({
        routes(){
            // if(process.env.NODE_ENV === "development"){
            //     // this.urlPrefix='api'
            //     this.passthrough("http://products");
            // }
               //   this.namespace=baseUrl;
              

        //    this.get("/allproducts",()=>{
        //     //   return products;   
        //     // return getAllproducts ;
        //     routes.map((route)=>{
        //         return route;
        //     //  route(this);
        //    })
       
            this.passthrough();
           routes.forEach((route)=>{
            route(this);
            // return route;
            
            // console.log("data",route)
        });
        // console.log("data",routes)
            // return routes;   
            //  routes.forEach((route)=>{
            //  route(this);
},
        
    });
 
   return server;
}

export default mirageServer;
    
    

