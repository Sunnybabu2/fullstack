import { createServer } from "miragejs/server";
import product from './product.json'
import routes from "./routes";

function mirageServer(){
    createServer({
        routes(){
        //    this.passthrough("api/products");
        //    this.namespace="api"
        this.get("/api/products",()=>{
            return routes;   
        })
         
        }
    })
    // return server;
}

export default mirageServer;