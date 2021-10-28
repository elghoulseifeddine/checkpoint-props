import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from '../List/List';
 class Show extends Component {
     state= {
         shows: false,
         
     }
   
  render() {
    return (
      <div>
      <Button onClick={()=>this.setState({shows: !this.state.show})} variant="primary" size="lg">
      Show Cards
    </Button>{' '}
    {this.state.shows? ( <List /> ):null}
      </div>
    );
  }
}
export default Show ;