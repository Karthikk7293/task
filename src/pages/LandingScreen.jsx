import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/cards/ProductCard'
import { getAllProducts } from '../Redux/actions'
import SkeltoneCard from '../components/cards/SkeltoneCard'
import Banner from '../components/banner/Banner.jsx'


function LandingScreen() {

    const dispatch = useDispatch()
    const { allProducts, loading } = useSelector((state) => state.allProducts)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <div>
            <Container >
                <Banner />
            </Container>
            <Container>

                <Row>
                    <div className="title text-center text-uppercase text-primary">
                        <h3 class>Popular Products</h3>
                        <hr />
                    </div>
                    {!loading ? allProducts.map((product, index) => (
                        <ProductCard key={index + 1} product={product} />
                    )) : (
                        <Row>
                            <SkeltoneCard />
                            <SkeltoneCard />
                            <SkeltoneCard />
                            <SkeltoneCard />
                            <SkeltoneCard />
                            <SkeltoneCard />
                        </Row>)}
                </Row>
            </Container>
        </div>
    )
}

export default LandingScreen