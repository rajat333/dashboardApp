import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from "./history/history";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        console.log("this dashboard0");
        this.state = {
            email: '',
            password: ''
        };
    }
    
    render() {
        console.log("in dasboard render");
        return (
        <div className="FormCenter Dashboard">
          <table class="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
        </div>
        );
    }
}

export default Dashboard;
