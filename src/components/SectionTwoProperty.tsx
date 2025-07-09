import { FC, useState, useEffect } from 'react';
//Components

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
//Icons
import { BsFillHouseFill } from "react-icons/bs";
import { FaUser, FaStar } from "react-icons/fa";

interface SectionTwoPropertyProps {
    index: number,
    image: string,
    title: string,
    description: string,
    bedroom: number,
    people: number,
    price: number,
    rating: number,
}

const SectionTwoProperty: FC<SectionTwoPropertyProps> = ({ index, image, title, description, bedroom, people, price, rating }) => {
    return(
        <Col index={index} lg={4} md={6} xs={12} className='p-3'>
            <Card className='bg-transparent text-white-50 border border-dark-subtle h-100'>
                <Card.Img variant='top' src={image} />
                <Card.Body>
                    <Card.Title className='text-white'>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div className='d-flex flex-row gap-3'>
                        <Card.Subtitle><BsFillHouseFill /> {bedroom} {bedroom > 1 ? 'badrooms' : 'badroom'}</Card.Subtitle>
                        <Card.Subtitle><FaUser /> {people} guests</Card.Subtitle>
                    </div>
                </Card.Body>
                <Card.Footer className='border-top mx-3 px-0 d-flex flex-row align-items-center justify-content-between'>
                    <Card.Header className='px-0 h2 text-white'>${price}/<span className='text-white-50 h4 fw-light'>night</span></Card.Header>
                    <Card.Header className='h3 text-white px-0'><FaStar className='text-warning' /> {rating}</Card.Header>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default SectionTwoProperty;