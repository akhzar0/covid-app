import React, { useState } from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap';
const Cards = (props) => {
    return (
        <>
            <CardGroup>
                <div className="row">
                    <div className="col">
                        <Card className='mt-5 shadow-lg rounded'>
                            <Card.Img variant="top" src={props.src} />
                            <Card.Body>
                                <Card.Title className='text-center fs-4 fw-500'>{props.deaths}</Card.Title>
                                <Card.Text className='fs-4 fw-500 bg-danger text-center mt-3 rounded w-100 text-white'>
                                    {props.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    </div>
            </CardGroup>
        </>
    )
}

export default Cards;