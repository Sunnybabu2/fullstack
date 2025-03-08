import React from 'react'
import { useSelector } from 'react-redux'

const Badge = () => {
    const numberofProducts=useSelector(state=>state.card)
  return (
    <div>
        <button className='btn btn-primary position-relative'>TotalProducts 

        <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{numberofProducts.length} </span>
        </button>
    </div>
  )
}

export default Badge