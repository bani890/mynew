import React, { Component } from 'react';
import './customers.css';
import { Table } from 'reactstrap';
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

class MyTable extends Component {

  constructor() {
    super();
    this.state = {
      solardata: []
    };
  }

  componentDidMount() {
    fetch('/api/solardata')
      .then(res => res.json())
      .then(solardata => this.setState({solardata}, () =>{console.log('Customers fetched...', solardata)

    }));

  }

  render() {
    return (
      <div>
        <h2>Solar Data</h2>
        <Table striped>
          <thead>
            <tr>
              <th></th>
              <th>Year</th>
              <th>Power</th>
              <th>Month</th>
              <th>Bills</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
        {this.state.solardata.map(data => 
          <tr>
            <th scope="row"></th>
            <td>{data.year}</td>
            <td>{data.month}</td>
            <td>${data.bill}</td>
            <td>${data.savings}</td>
            <td>{data.kwh} kwh</td>
          </tr>
        )}
        </tbody>
        </Table>
     </div>
    );
  }
}



export default MyTable;
