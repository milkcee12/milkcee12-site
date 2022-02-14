import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
    return (
        <div className="Navigation">
            <Navbar expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Michaela Chang</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/">Work</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;
