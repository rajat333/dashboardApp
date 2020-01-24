/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import "./Dashboard.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        console.log("this dashboard0");
        this.state = {
            selectedUser :{ },
            enablePopUp:false,
        };
        this.openPopUp = this.openPopUp.bind(this);
    }
    
    openPopUp(event){
        console.log("in open popup",event.target.id);
        this.setState({
          enablePopUp:true
        })
    }

    render() {
        console.log("in dasboard render");
        return (
        <div className="FormCenter Dashboard">
        
        <div class="sidenav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
          <div className="main">
          <table className="table table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
              <td>
                <a className="add" >  
                <i class="fa fa-file" onClick={ this.openPopUp } id="John"  data-toggle="modal" data-target="#myModal" ></i></a>
              </td>
              {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open modal
  </button> */}
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
              <td>
                <a className="add" title="Add" data-toggle="tooltip">  <i class="fas fa-file"></i></a>
              </td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
              <td>
                <a className="add" title="Add" data-toggle="tooltip">  <i class="fas fa-file"></i></a>
              </td>
              </tr>
            </tbody>
          </table>
          </div>

          

  {/* <!-- The Modal --> */}
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div class="modal-header">
          <h4 class="modal-title">Modal Heading</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div class="modal-body">
          Modal body..
        </div>
        <iframe src="http://localhost:3000/">
  <p>Your browser does not support iframes.</p>
</iframe>
        {/* <!-- Modal footer --> */}
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>

        </div> 
        );
    }
}

export default Dashboard;
