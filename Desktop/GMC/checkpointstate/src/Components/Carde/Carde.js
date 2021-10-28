import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Carde extends Component {
  state = {
    persons: [],
  };

  test = () => {
    this.setState({
      persons: [...this.state.persons, this.props.persons[this.props.i]],
    });
  };

 

  // componentDidUpdate(){
  //   this.test()
  // }



  render() {
    console.log(this.state.persons);
    console.log(this.props.persons[this.props.i]);
    console.log(this.props.i);

    return (
      <div className="lists">
        <Card style={{ width: "20rem" }}>
          <Card.Img
            className="imaage" variant="top"
            src={this.props.persons[this.props.i].imgSrc}
          />
          <Card.Body className="back">
            <Card.Title>{this.props.persons[this.props.i].fullName}</Card.Title>
            <Card.Text>{this.props.persons[this.props.i].bio}</Card.Text>
            <Card.Text>{this.props.persons[this.props.i].profession}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Carde;
