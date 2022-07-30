import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'
import image from '../assets/background2.jpg'

const Styles = styled.div`

.jumbo {
    background: url(${image}) no-repeat fixed bottom;
    background-size: cover;
    color: black;
    height: 500px;
    positive: relative;
    z-index: -2;
}

.overlay {
    text-align: center;
    background-color: #000;
    opacity: 0;
    position: relative;
    height: 80%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    }
`;

const Jumbotron = () => (
    <Jumbo fluid>
            <Container> 
            </Container>
    </Jumbo>
)

export default Jumbotron