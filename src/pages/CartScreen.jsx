import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import { addToCart, removeFromCart } from '../Redux/actions'

function CartScreen() {
  const { cartItems } = useSelector((state) => state.cart)
  const [total, setTotal] = useState(null)
  const dispatch = useDispatch()
  const alert = useAlert()

  useEffect(() => {
    if (cartItems) {
      let data = cartItems.reduce((acc, i) => Math.round((i.price * i.quantity) + acc), 0)
      setTotal(data)
    }
  }, [cartItems])


  const updateCartCount = (product, quantity) => {
    dispatch(addToCart(product, quantity))
  }
  const removeProduct = (product) => {
    dispatch(removeFromCart(product))
    alert.error("item removed from cart !")
  }
  return (
    <Container>
      <Row className="">
        <Col lg={7} className="" >
          <div className="cart-product-herder bg-white text-uppercase mx-2 py-3 px-3">
            <h4>get free shipping free with more than <span>500+</span> purchase</h4>
          </div>
          <div className="cart-product-herder  bg-white  m-2 py-2 px-3 text-muted">
            <h3>Your Cart <span className=' my-auto'>({cartItems?.length})</span></h3>
          </div>
          <div className='cart-items-list mx-2' >
            {cartItems && cartItems.length > 0 ? (
              <>
                {cartItems.map((item, index) => (

                  <div key={index + 1} className="cart-products p-3 border m-2 d-block d-md-flex justify-content-between ">

                    <div className="cart-img my-auto text-center">
                      <img width={"100"} src={item.filename} alt="" />
                    </div>
                    <div className="cart-body mx-2">
                      <h4 className='text-uppercase'>{item.title}</h4>
                      <p className='m-0 p-0'>{item.type}</p>
                      <StarRatings
                        rating={item.rating}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        name='rating'
                        starDimension=".7rem"
                        starSpacing=".1rem"
                      />
                      <p className='text-muted'>{item.description}</p>
                      <p >Quantity {item.type !== "dairy" ? "in KG" : ""} : <span className='text-primary'> {item.quantity}</span></p>
                      <div className="cart-buttons ">
                        <button className={`btn btn-outline-danger mx-1 ${item.quantity <= 1 ? "disabled" : ""} `} onClick={(() => updateCartCount(item, -1))} >-</button>
                        <span className='my-auto mx-4'>{item.quantity}</span>
                        <button className={`btn btn-outline-danger mx-1 ${item.quantity >= 10 ? "disabled" : ""} `} onClick={(() => updateCartCount(item, 1))}>+</button>
                      </div>
                    </div>
                    <div className="cart-price text-center py-2  text-lg-end">
                      <button className='btn btn-outline-danger rounded-0 ' onClick={(() => removeProduct(item))}>remove</button>
                      <p className='text-danger mt-3'>$ {item.price}</p>

                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="cart-products text-center  m-0 p-0">
                <div className="not-found mx-auto text-center text-uppercase">
                  <img width={"400"} src="https://shop.millenniumbooksource.com/static/images/cart1.png" alt="" />
                </div>
                <Link className='btn btn-outline-success rounded-0 text-center' to={'/'}>back to purchase</Link>
              </div>
            )}
          </div>



        </Col>
        <Col lg={4} className="">
          <div className="product-summery bg-black shadow mx-4 py-4" >
            <div className="summery-title">
              <h2 className='text-light text-uppercase text-center my-2'>summery</h2>
            </div>
            <hr className='bg-light' />
            <div className="summery-body p-4 text-uppercase text-white" >
              <div className="summery-total d-flex justify-content-between  ">
                <p>subtotal</p>
                <span>{total}.00</span>
              </div>
              <hr className=' p-0 hr' />
              <div className="summery-total d-flex justify-content-between  ">
                <p>esitmated shipping charge</p>
                <span>{total < 500 ? "100" : "00"}</span>
              </div>
              <div className="summery-total d-flex justify-content-between  ">
                <p>tax</p>
                <span>{Math.round(total / 100 * 18)}.00</span>
              </div>
              <hr className=' hr' />
              <div className="summery-total d-flex justify-content-between  ">
                <p>grand total</p>
                <span>{total + Math.round(total / 100 * 18)}.00</span>
              </div>
              <hr className=' hr' />

            </div>
            <div className="summery-footer text-center">
              <button className="checkout-btn text-center border-0 w-50 py-2 text-uppercase ">
                checkout
              </button>
            </div>
          </div>

        </Col>
      </Row>
    </Container>
  )
}

export default CartScreen;