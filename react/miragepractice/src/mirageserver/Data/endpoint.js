import mockAllProductsData from '../getAllproducts.json'
// import mirageServer from './pointserver'


export default function(server){
    server.get('/allproducts', function (){
        return JSON.stringify(mockAllProductsData);
    });
}

//policies