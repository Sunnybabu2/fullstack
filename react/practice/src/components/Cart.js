import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector , useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice'

const Cart = () => {
  const products=useSelector(state=>state.cart)
  const dispatch=useDispatch();

  const removeToCart=(id)=>{
     dispatch(remove(id));
  }

  const cards = products.map(product => (
    <div className="col-md-12" style={{ marginBottom: '10px' }}>
        <Card key={product.id} className='h-100'>
            <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />

            </div>
            <Card.Body>
                <Card.Title>{product.title} </Card.Title>
                <Card.Text>
                    INR. {product.price}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{ background: 'white' }}>
                <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove Item</Button>

            </Card.Footer>
        </Card>
    </div>
))
  return (
    <>
      <div className='row'>
          <h1>Cart</h1>
          {cards}
      </div>
    </>
  )
}

export default Cart