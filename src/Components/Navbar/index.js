import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function NavbarPage({ searchValue, onSearchChange, show }) {

    return (
        <>
            <Navbar expand="sm" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className='colorful-text'>ThinkBig Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-sm-sm`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to="/" className='nav-link-hover'><b>Home</b></Nav.Link>
                                <Nav.Link as={Link} to="/dashboard" className='nav-link-hover'><b>Dashboard</b></Nav.Link>
                            </Nav>
                            {
                                show &&
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        value={searchValue}
                                        onChange={onSearchChange}
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            }
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarPage