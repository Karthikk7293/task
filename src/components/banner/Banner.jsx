import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './banner.css'

function Banner() {
  return (
    <Row className='banner-main '>
      <Col lg={6}>
        <img width={"20"} src="https://pics.clipartpng.com/Cherries_Fruit_PNG_Clipart-216.png" alt="" />
        <h1 className='banner-main-title '>let's now shop for daily food & neccesary.</h1>
        <h6 className='banner-main-subtitle'>home delevery and online reservation system for restaurants,cafe,food & groceries</h6>
      </Col>
      <Col lg={6}>
        <div className="img d-none d-md-block">
          <img width={"100%"} src="https://www.pngmart.com/files/11/Online-Portal-E-Commerce-Transparent-PNG.png" alt="" />
        </div>
      </Col>
    </Row>
  )
}

export default Banner