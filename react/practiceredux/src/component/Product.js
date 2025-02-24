import {useEffect,useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

const Product = () => {
 const [products,getProducts] =useState([])
    useEffect(()=>{

        //api
        fetch("https://fakestoreapi.com/products")
        .then(data=>data.json())
        .then(result=>getProducts(result))

        // axios.get("https://fakestoreapi.com/products")
        // .then(data=>getProducts(data))
    },[])

    const cards=products.map(product=>(
        <div className="col-md-3" style={{marginBottom:'10px'}}>
        <Card key={product.id}  className='h-100'>
            <div className='text-center'>
            <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}}/>

            </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          INR. {product.price}
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
      </div>
    ))
  return (
   <>
        <h1>Product Dashboard</h1>
        <div className='row' >
       {cards}
    </div>
    </>
  )
}

export default Product