import { FC, useState, useEffect } from 'react';
//Components
import './propertyPageStyle.css';
import SectionOne from './SectionOne.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Axios
import axios from 'axios';

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
        <Container fluid className='cs-bg-main cs-max-w shadow p-0 min-vh-100'>
            <SectionOne />
        </Container>
    )
}

export default PropertyPage;
