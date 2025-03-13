import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from '../store/cartSlice';
// import { getProducts } from '../store/productSlice';
import { fetchAllproducts } from '../mirageserver/service';
import Alert from 'react-bootstrap/Alert'
import StatusCode from '../utils/StatusCode';

const Product = () => {
    // const [products, getProducts] = useState([]);
    const {data: products,status} = useSelector((state)=>state.getProducts);
    // console.log("products",products)
    const dispatch=useDispatch();
    useEffect(() => {

      dispatch(fetchAllproducts());
        // fetch("https://fakestoreapi.com/products")
        //     .then(data => data.json())
        //     .then(result => getProducts(result))
    }, [dispatch]);

    const addToCart=(product)=>{
             //dispatch an action
          dispatch(add(product));
      
    }

    if(status === StatusCode.LOADING){
        return <p>Loading...</p>
    }

    if(status=== StatusCode.ERROR){
        return <Alert variant='danger'>Something went wrong...</Alert>
    }

    const cards = products.map(product => (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card key={product?.id} className='h-100'>
                <div className='text-center'>
                    <Card.Img variant="top" src={`${product.image}`}style={{ width: '100px', height: '130px' }} />

                </div>
                <Card.Body>
                    <Card.Title>{product?.title} </Card.Title>
                    <Card.Text>
                        INR. {product?.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'white' }}>
                    <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>

                </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <>
            <h1>Product Dashboard</h1>
            <div className='row'>
                {/* {JSON.stringify(products)} */}
                {cards}
            </div>
        </>
    )
}

export default Product