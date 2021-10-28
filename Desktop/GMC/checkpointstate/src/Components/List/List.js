import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carde from "../Carde/Carde";

class List extends Component {
  state = {
    person: [
      {
        fullName: "Rabi Bouden",
        bio: "Wiw",
        imgSrc:
          "https://tse3.mm.bing.net/th?id=OIP.-AwkNu3BAt59qRVFp9cnzgHaFj&pid=Api&P=0&w=238&h=179",
        profession: "Trrr tiiiiw",
      },
      {
        fullName: "Jalel Brik",
        bio: "Dirr",
        imgSrc:
          "https://tse1.mm.bing.net/th?id=OIP.SlIN6VXyMZ2GbkmCdFfswwHaEK&pid=Api&P=0&w=308&h=174",
        profession: "Rabrabi",
      },
      {
        fullName: "Samir Pesiron",
        bio: "Mazelt ne9es",
        imgSrc:
          "https://tse1.mm.bing.net/th?id=OIP.E9liA1lvOUV5MLwNsst-uAHaEK&pid=Api&P=0&w=283&h=160",
        profession: "charab chrab",
      },
    ],
    i: 0,
    timer: 0,
    // onePerson: {},
  };
  showsMore = () => {
    this.setState({
      i: this.state.i + 1,
    });
  };

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }
  // FullCards = () => {
  //   this.setState({
  //     onePerson: this.state.person[this.state.i],
  //   });
  // };

  // {this.state.person.map((onePerson) => (
  //   <Carde onePerson={onePerson} />
  // ))}

  render() {
    return (
      <div>
        <h1> {this.state.timer}</h1>
        <Carde persons={this.state.person} i={this.state.i} />

        <Button onClick={this.showsMore} variant="secondary" size="sm">
          Show more
        </Button>
      </div>
    );
  }
}

export default List;

// <Carde
//   name={this.FullCards.fullName}
//   bio={this.FullCards.bio}
//   img={this.FullCards.imgSrc}
//   prof={this.FullCards.profession}
// />
