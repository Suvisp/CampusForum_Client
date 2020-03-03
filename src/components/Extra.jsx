import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

export default class Extra extends Component {
//   constructor(props) {
//     super(props);
    // this.state = { scooters: [] 
// };

  render() {

    return (
      <div>
      
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>Tänne jotain kivaa</th>
         
            </tr>
          </thead>
      
        </Table>
      </div>
    )
  }
}