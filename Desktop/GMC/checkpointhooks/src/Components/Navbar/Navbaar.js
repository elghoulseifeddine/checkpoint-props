import React, {useState} from 'react';
import {Navbar, Container, Nav, Form, Button,FormControl} from 'react-bootstrap';
import MovieAdd from '../MovieAdd/MovieAdd';

const Navbaar = ({setInputSearch, addMovie}) => {

    const handleChange =(e)=> {
    let newValue= e.target.value;
    setInputSearch(newValue)
  }
  return (
    <div>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Movie App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <MovieAdd addMovie={addMovie} />        
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search your movie"
            className="me-2"
            aria-label="Search"
            onChange={handleChange}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  );
}

export default Navbaar;
