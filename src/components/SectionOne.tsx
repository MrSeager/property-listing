import { FC, useState, useEffect } from 'react';
//Components
import './propertyPageStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, ButtonGroup, Button, Form, FormCheck } from 'react-bootstrap';

const SectionOne: FC = () => {
    return (
        <Container fluid className='position-relative cs-bg-image px-lg-5 cs-h d-flex flex-column justify-content-center'>
            <h1 className='ms-lg-5 fw-bold display-1 text-black'>Peace, nature,<br /> 
            dream</h1>
            <p className='ms-lg-5 text-black fs-4 fw-semibold'>Find and book a great experience.</p>
            <Container className='cs-bg-one rounded p-5 position-absolute cs-position d-flex flex-row align-items-center justify-content-between border'>
                <ButtonGroup className='gap-3'>
                    <Button className='fw-semibold text-nowrap cs-btn-one rounded border-0 bg-transparent cs-transition'>All Stays</Button>
                    <Button className='fw-semibold cs-btn-one rounded border-0 bg-transparent cs-transition'>Norway</Button>
                    <Button className='fw-semibold cs-btn-one rounded border-0 bg-transparent cs-transition'>Finland</Button>
                    <Button className='fw-semibold cs-btn-one rounded border-0 bg-transparent cs-transition'>Sweden</Button>
                    <Button className='fw-semibold cs-btn-one rounded border-0 bg-transparent cs-transition'>Switzerland</Button>
                </ButtonGroup>
                <Form className='d-flex flex-row align-items-center gap-3'>
                    <FormCheck
                        type='switch'
                        id='cs-switch'
                        label='Superhost'
                        className='text-white'
                    />
                    <Form.Select className='shadow-none bg-transparent text-white rounded-3'>
                        <option>Property type</option>
                        <option value='1'>1 bedroom</option>
                        <option value='2'>2 bedrooms</option>
                    </Form.Select>
                </Form>
            </Container>
        </Container>
    );
}

export default SectionOne;