import { FC, useState, useEffect } from 'react';
//Components
import './propertyPageStyle.css';
import SectionOne from './SectionOne.tsx';
import SectionTwo from './SectionTwo.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
//Axios
import axios from 'axios';
//Icons
import { BsFillHouseFill } from "react-icons/bs";
import { FaUser, FaStar } from "react-icons/fa";

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

const PropertyPage: FC = () => {
    const [properties, setProperties] = useState<PropertiesProps[]>([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json').then((response) => {
          setProperties(response.data);
        });
    }, []);

    return (
        <Container fluid className='cs-bg-main cs-max-w overflow-hidden shadow p-0 min-vh-100'>
            <SectionOne />
            <SectionTwo 
                properties={properties}
            />
        </Container>
    )
}

export default PropertyPage;
