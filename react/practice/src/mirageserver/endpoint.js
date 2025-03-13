import mockproductData from './product.json'


export default function(server){
    server.get('/products', function (){
        return JSON.stringify(mockproductData);
    })
}