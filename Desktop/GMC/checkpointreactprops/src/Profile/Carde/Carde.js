import React from 'react';
import {Card, Button} from 'react-bootstrap'
import propTypes from 'prop-types';

const Carde = (props) => {
  
const sayHi = () => {
  return alert(`Hello dear ${props.name}`)
}
  return (
    <div style={{margin: '10px'}}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.r_xj_PoLmqEY1iauAEu_eAHaEo&pid=Api&P=0&w=256&h=161" />
    <Card.Body>
      <Card.Title style={{color: "green"}}>{props.name}</Card.Title>
      <Card.Text style={{color: "orange"}}>
      {props.age}
      </Card.Text>
      <Card.Text>
      {props.prof}
      </Card.Text>
      <Button variant="primary" onClick={sayHi}>Say Hi</Button>
    </Card.Body>
  </Card>
    </div>
  );
}

export default Carde;

Carde.defaultProps = {
 name: "Robot",
 age: "Infinity",
 prof: "Always Busy"
};

Carde.propTypes={
  name: propTypes.string,
  age: propTypes.number,
  prof: propTypes.string,
};