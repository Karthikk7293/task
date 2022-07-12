import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import ProductCard from '../components/cards/ProductCard'

import { addToCart, getAllProducts } from '../Redux/actions'
import './pages.css'

function SingleProductScreen() {
  const params = useParams()
  const dispatch = useDispatch()
  const alert = useAlert()
  const [products, setProduct] = useState(null)
  const [suggestions, setSuggestions] = useState(null)
  const { allProducts } = useSelector((state) => state.allProducts)


  useEffect(() => {
    dispatch(getAllProducts())
    if (allProducts) {

      const [data] = allProducts.filter((product) => product.id === params.productId)
      setProduct(data)

    }


  }, [dispatch, params])

  useEffect(() => {
    if (allProducts && products) {
      const result = allProducts.filter((item) => item.type === products.type)
      setSuggestions(result)
      console.log("infinite");
    }
  }, [allProducts])

  const addTOcartHandler = (product,quantity) => {
    dispatch(addToCart(product,quantity))
    alert.success("item add to cart")

  }

  return (
    <Container>
      <Row className="  ms-auto">
        <Col lg={10} className=" my-5  ms-auto ">
          <div className="single-product d-flex   shadow border w-50 py-3" >
            <div className="single-product-body text-uppercase w-50 ms-auto  me-5 my-3 text-center py-3">
              <h4>{products?.title}</h4>
              <i className="text-start">
                <StarRatings
                  rating={products?.rating}
                  starRatedColor="red"
                  numberOfStars={5}
                  name='rating'
                  starDimension=".7rem"
                  starSpacing=".1rem"
                />
              </i>
              <div className="d-flex justify-content-between">
                <h6 className="price  text-end">{products?.type} </h6>
                <h5 className="price text-danger text-end">${products?.price} </h5>
              </div>
              <p className='text-start fw-bold text-success text-uppercase'>{products && products.rating >= 1 ? "instock" : " out of stock"}</p>
              <p className="text-muted text-start h6 fw-light  mt-5 p-0 m-0">{products?.description} </p>
              <p className='text-start text-muted fw-light mb-5 mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nostrum quis obcaecati officiis, numquam dicta modi nisi asperiores placeat laudantium voluptates maxime molestias animi doloribus iusto minima dolores ut eaque!</p>
              <button className='add-to-cart border-0  text-white   mx-1' onClick={(()=>addTOcartHandler(products,1))}>add to cart</button>
              <button className='buy-now border-0  text-white  mx-1'>buy now</button>
            </div>

          </div>
          <div className="product-images text-center mx-2 border pb-3">
            <div className="main-product-img  ">
              <img className="mx-auto" src={products && products.filename} alt="" />
            </div>
            <div className=" d-flex justify-content-between text-center my-3 px-2">

              <div className='multiple-images  '>
                <img width={"50"} className="  " src={products && products.filename} alt="" />
              </div>
              <div className='multiple-images '>
                <img width={"50"} className=" " src={products && products.filename} alt="" />
              </div>
              <div className='multiple-images '>
                <img width={"50"} className=" " src={products && products.filename} alt="" />
              </div>
              <div className='multiple-images '>
                <img width={"50"} className=" " src={products && products.filename} alt="" />
              </div>

            </div>
          </div>

        </Col>

      </Row>
      <Row className='my-5'>
        <div className="relative-products my-5">
          <h3 className='text-capitalize'>you might also like</h3>
        </div>

        {suggestions ? suggestions.map((item, index) => (
          <ProductCard product={item} />
        )) : "no items here..."}

      </Row>
    </Container>
  )
}

export default SingleProductScreen