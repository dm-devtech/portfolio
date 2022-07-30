import React from 'react'
import { Nav, Navbar, NavBar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
.navbar {
    background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link {
    color: #e6e6e6;

    &:hover {
        color: grey;
    }
}
`

const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/" className="display-1">David Millen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Item><Nav.Link href="/projects" className="display-6">Projects</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about" className="display-6">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/blog" className="display-6">Blog</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default NavigationBar