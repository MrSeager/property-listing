import { FC, useState, useEffect } from 'react';
//Components
import './propertyPageStyle.css';
import SectionOne from './SectionOne.tsx';
import SectionTwo from './SectionTwo.tsx';
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
    const [filtredProperties, setFiltredProperties] = useState<PropertiesProps[]>([]);

    const [selectedCountry, setSelectedCountry] = useState<string>('All');
    const [isSuperhost, setIsSuperhost] = useState<boolean>(false);
    const [selectedBedrooms, setSelectedBedrooms] = useState<number>(0);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json').then((response) => {
          setProperties(response.data);
        });
    }, []);

    useEffect(() => {
        const filtered = properties.filter((property) => {
            const matchCountry =
                selectedCountry === 'All' || property.location === selectedCountry;
            const matchSuperhost =
                !isSuperhost || property.superhost === true;
            const matchBedrooms =
                selectedBedrooms === 0 || property.capacity.bedroom === selectedBedrooms;

            return matchCountry && matchSuperhost && matchBedrooms;
        });

        setFiltredProperties(filtered);
    }, [properties, selectedCountry, isSuperhost, selectedBedrooms]);

    return (
        <Container fluid className='cs-bg-main cs-max-w overflow-hidden shadow p-0 min-vh-100'>
            <SectionOne
                setSelectedCountry={setSelectedCountry}
                isSuperhost={isSuperhost}
                setIsSuperhost={setIsSuperhost}
                selectedBedrooms={selectedBedrooms}
                setSelectedBedrooms={setSelectedBedrooms}
            />
            <SectionTwo 
                properties={filtredProperties}
            />
        </Container>
    )
}

export default PropertyPage;
