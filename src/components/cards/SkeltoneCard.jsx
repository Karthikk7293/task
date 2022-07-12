import React from 'react'
import { Col } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './card.css'

function SkeltoneCard() {
    return (
        <Col className='my-4  ' lg={4}>
            <div class="product shadow border-0 bg-light">
                <div class=" ">  <Skeleton className='' width={"100%"} height={"10rem"} />  </div>
                <div class="px-3">
                    <StarRatings
                        rating={0}
                        starRatedColor="red"
                        numberOfStars={5}
                        name='rating'
                        starDimension=".7rem"
                        starSpacing=".1rem"
                    />

                    <div className="d-flex  justify-content-between"> <Skeleton width={50} height={10} /> <Skeleton width={40} height={10} /> </div>
                    <p className='p-0 m-0  ' ><Skeleton height={7} width={150} /> </p>
                    <div className=''>
                        <Skeleton height={7} />
                        <Skeleton height={10} />
                    </div>


                </div>
            </div>

        </Col>
    )
}

export default SkeltoneCard