import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Carde extends Component {
  // state = {
  //   persons: [
  //   ],
  // };

  // componentDidMount() {
  //   this.setState({ ...this.state, persons:[...this.state.persons , this.props.onePerson] });
  // }

  render() {
    console.log(this.props);

    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.persons[this.props.i].imgSrc}
          />
          <Card.Body>
            <Card.Title>
              {this.props.persons[this.props.i].fullName}
            </Card.Title>
            <Card.Text>{this.props.persons[this.props.i].bio}</Card.Text>
            <Card.Text>
              {this.props.persons[this.props.i].profession}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Carde;
