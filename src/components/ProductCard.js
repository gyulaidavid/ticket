import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
//after install you need these elements for Swiper
import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"
//after install you need these elements for Swiper END

function ProductCard({product}) {


    const cart= useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

    return (
       
        <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        className
        > 
     {product.map((prod, i) => (
         <SwiperSlide> *
        <Card>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>{prod.description}</Card.Text>
                <Card.Text>${prod.price}</Card.Text>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(prod.id)} className='mx-2'>+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(prod.id)} className='mx-2'>-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(prod.id)}>Remove</Button>
                    </>
                    :
                    
                    <Button variant="primary" onClick={() => cart.addOneToCart(prod.id)}> Add to Cart </Button>
                }
                
            </Card.Body>
        </Card>
        </SwiperSlide>
        ))}
        </Swiper>
       
    )
}

export default ProductCard;