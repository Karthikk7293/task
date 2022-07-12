import React from 'react'
import { useAlert } from 'react-alert';
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { addToCart } from '../../Redux/actions';
import './card.css'

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const alert = useAlert()
  const addTOcartHandler = (e) => {
    e.preventDefault()
    dispatch(addToCart(product, 1))
    alert.success("item add to cart")

  }

  return (
    <Col className='my-4  ' lg={4}>
      <div class="product shadow border-0">
        <div class="imgbox "> <img src={product.filename} className="w-100" alt={product.title} /> </div>
        <div class="specifies ">
          <h5 className='m-0 p-0'>{product.title}  </h5>
          <StarRatings
            rating={product.rating}
            starRatedColor="yellow"
            numberOfStars={5}
            name='rating'
            starDimension=".7rem"
            starSpacing=".1rem"
          />

          <div className="d-flex justify-content-between text-capitalize"> <span>{product.type}</span><span className='price text-danger'>${product.price}</span></div>
          <p className='p-0 m-0 border-0 text-muted product-description text-truncate my-1' >{product.description}</p>
          <div className='d-flex text-center border-0'>
            <Link to={`/single-product/${product.id}`} className="border-0 rounded-0 bg-danger w-100 text-white py-1 mx-1 btn">view now</Link>
            <input type="submit" className='border-0 rounded-0 bg-info w-100 text-center text-white py-1 mx-1 btn' onClick={addTOcartHandler} value={"add to cart"} />
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ProductCard