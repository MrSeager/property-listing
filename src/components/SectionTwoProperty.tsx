import { FC, useState, useEffect } from 'react';
//Components

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Badge, Col, Card } from 'react-bootstrap';
//Icons
import { BsFillHouseFill } from "react-icons/bs";
import { FaUser, FaStar } from "react-icons/fa";

interface PropertyProps {
    id: number,
    title: string,
    description: string,
    price: number,
    rating: number,
    superhost: boolean,
    location: string,
    capacity: {
      people: number,
      bedroom: number,
    },
    image: string,
}

interface SectionTwoPropertyProps {
    index: number,
    property: PropertyProps,
}

const SectionTwoProperty: FC<SectionTwoPropertyProps> = ({ index, property }) => {
    return(
        <Col index={index} lg={4} md={6} xs={12} className='p-3'>
            <Card className='position-relative bg-transparent text-white-50 border border-dark-subtle h-100'>
                <Card.Img variant='top' src={property.image} />
                {property.superhost === true 
                    ? <Badge bg='custom' className='d-flex flex-row py-2 px-3 rounded-pill mt-3 ms-3 fs-6 cs-bg-main position-absolute'>Superhost <FaStar className='ms-1 text-warning' /></Badge>
                    : ''
                }
                <Card.Body>
                    <Card.Title className='text-white'>{property.title}</Card.Title>
                    <Card.Text>{property.description}</Card.Text>
                    <div className='d-flex flex-row gap-3'>
                        <Card.Subtitle><BsFillHouseFill /> {property.capacity.bedroom} {property.capacity.bedroom > 1 ? 'badrooms' : 'badroom'}</Card.Subtitle>
                        <Card.Subtitle><FaUser /> {property.capacity.people} guests</Card.Subtitle>
                    </div>
                </Card.Body>
                <Card.Footer className='border-top mx-3 px-0 d-flex flex-row align-items-center justify-content-between'>
                    <Card.Header className='px-0 h2 text-white'>${property.price}/<span className='text-white-50 h4 fw-normal'>night</span></Card.Header>
                    <Card.Header className='h3 text-white px-0 d-flex flex-row align-items-center'><FaStar className='text-warning me-2' /> {property.rating}</Card.Header>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default SectionTwoProperty;