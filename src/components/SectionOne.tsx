import { FC, ChangeEvent } from 'react';
//Components
import './propertyPageStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, ButtonGroup, Button, FormCheck, Dropdown, DropdownButton } from 'react-bootstrap';

interface SectionOneProps {
    setSelectedCountry: (location: string) => void,
    isSuperhost: boolean,
    setIsSuperhost: (isSuperhost: boolean) => void,
    selectedBedrooms: number,
    setSelectedBedrooms: (bedroom: number) => void,
}

const SectionOne: FC<SectionOneProps> = ({ setSelectedCountry, isSuperhost, setIsSuperhost, selectedBedrooms, setSelectedBedrooms }) => {
    const handleCountryClick = (location: string) => {
        setSelectedCountry(location);
    };

    const handleSuperhosToggle = (event: ChangeEvent<HTMLInputElement>) => {
        setIsSuperhost(event.target.checked);
    };

    return (
        <Container fluid className='position-relative cs-bg-image px-lg-5 cs-h d-flex flex-column text-lg-start text-center justify-content-lg-center justify-content-start'>
            <h1 className='ms-lg-5 mt-lg-0 mt-5 fw-bold display-1 text-black'>Peace, nature,<br /> 
            dream</h1>
            <p className='ms-lg-5 text-black fs-4 fw-semibold'>Find and book a great experience.</p>
            <Container className='cs-bg-one rounded p-5 position-absolute cs-position d-flex flex-lg-row flex-column gap-3 align-items-center justify-content-between border'>
                <ButtonGroup className='gap-lg-3 gap-0 display-inline'>
                    <Button onClick={() => handleCountryClick('All')} className='fw-semibold text-nowrap cs-btn-one rounded border-0 bg-transparent cs-transition'>All Stays</Button>
                    <Button onClick={() => handleCountryClick('Norway')} className='fw-semibold cs-btn-one rounded border-0 bg-transparent cs-transition'>Norway</Button>
                    <Button onClick={() => handleCountryClick('Finland')} className='fw-semibold cs-btn-one rounded border-0 bg-transparent cs-transition'>Finland</Button>
                    <Button onClick={() => handleCountryClick('Sweden')} className='fw-semibold cs-btn-one rounded border-0 bg-transparent cs-transition'>Sweden</Button>
                    <Button onClick={() => handleCountryClick('Switzerland')} className='fw-semibold cs-btn-one rounded border-0 bg-transparent cs-transition'>Switzerland</Button>
                </ButtonGroup>
                <Container className='d-flex flex-row align-items-center gap-3 justify-content-lg-end justify-content-center'>
                    <FormCheck
                        type='switch'
                        id='cs-switch'
                        label='Superhost'
                        checked={isSuperhost}
                        onChange={handleSuperhosToggle}
                        className='cs-transition text-white d-flex flex-row align-items-center gap-2'
                    />

                    <Dropdown drop='down-centered'>
                        <Dropdown.Toggle id="dropdown-basic" className='px-3 bg-transparent rounded-3 border-dark-subtle cs-ddbtn-main'>
                            {selectedBedrooms === 0
                                ? 'Property type'
                                : `${selectedBedrooms} Bedroom${selectedBedrooms > 1 ? 's' : ''}`
                            }
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='py-0  border border-dark-subtle cs-bg-main overflow-hidden'>
                            <Dropdown.Item className='bg-transparent cs-transition text-white cs-ddbtn' active={selectedBedrooms === 0} onClick={() => setSelectedBedrooms(0)}>All Options</Dropdown.Item>
                            <Dropdown.Item className='bg-transparent cs-transition text-white cs-ddbtn' active={selectedBedrooms === 1} onClick={() => setSelectedBedrooms(1)}>1 Bedroom</Dropdown.Item>
                            <Dropdown.Item className='bg-transparent cs-transition text-white cs-ddbtn' active={selectedBedrooms === 2} onClick={() => setSelectedBedrooms(2)}>2 Bedrooms</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Container>
        </Container>
    );
}

export default SectionOne;