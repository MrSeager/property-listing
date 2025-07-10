import { FC, useState, useEffect } from 'react';
//Components
import SectionTwoProperty from './SectionTwoProperty.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Spinner } from 'react-bootstrap';

interface PropertiesProps {
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

interface SectionTwoProps {
    properties: PropertiesProps[];
}

const SectionTwo: FC<SectionTwoProps> = ({ properties }) => {
    return (
        <Container className='my-5 pt-5 mx-auto px-0'>
            <h2 className='text-white'>Over 200 stays</h2>
            <Row>
                {properties.length > 0 ? (
                    properties.map((property, index) => (
                        <SectionTwoProperty 
                            index={index}
                            property={property}
                        />
                    ))
                ) : <Spinner className='mx-auto my-5' animation="grow" variant="light" role='status' />}
            </Row>
        </Container>
    );
}

export default SectionTwo;