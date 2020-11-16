import React from 'react';
import './../App.css';
import {NavLink} from 'react-router-dom';

function NavigationBar() {
    return (
      <div>
          <h1>
            <div class = "row page-links-row">
              <div class = "col page-links-bar">
                <NavLink to="/" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Home</NavLink>
              </div>
              <div class = "col page-links-bar">
                <NavLink to="/" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Back</NavLink>
              </div>
            </div>
          </h1>
      </div>
    );
  };

class InvoiceOverview extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        blockFire: false,
        blockFlood: false,
        blockPower: false,
        blockMedical: false,
  
        blockLow: false,
        blockMedium: false,
        blockHigh: false,
        blockCritical: false,

        invoices: this.props.invoices
      }
    }
  
    fireChangeState() {this.setState({blockFire: !this.state.blockFire});}
    floodChangeState() {this.setState({blockFlood: !this.state.blockFlood});}
    powerChangeState() {this.setState({blockPower: !this.state.blockPower});}
    medicalChangeState() {this.setState({blockMedical: !this.state.blockMedical});}
  
    lowChangeState() {this.setState({blockLow: !this.state.blockLow});}
    mediumChangeState() {this.setState({blockMedium: !this.state.blockMedium});}
    highChangeState() {this.setState({blockHigh: !this.state.blockHigh});}
    criticalChangeState() {this.setState({blockCritical: !this.state.blockCritical});}
  
    render () {

      var displayedData = this.props.members;
  
      if (this.state.blockFire) displayedData = displayedData.filter(post => !(post.problem === "Fire"));
      if (this.state.blockFlood) displayedData = displayedData.filter(post => !(post.problem === "Flood"));
      if (this.state.blockPower) displayedData = displayedData.filter(post => !(post.problem === "Power"));
      if (this.state.blockMedical) displayedData = displayedData.filter(post => !(post.problem === "Medical"));
  
      if (this.state.blockLow) displayedData = displayedData.filter(post => !(post.priority === "Low"));
      if (this.state.blockMedium) displayedData = displayedData.filter(post => !(post.priority === "Medium"));
      if (this.state.blockHigh) displayedData = displayedData.filter(post => !(post.priority === "High"));
      if (this.state.blockCritical) displayedData = displayedData.filter(post => !(post.priority === "Critical"));
  
      return (
        <div>
            <NavigationBar />
            <div class = "row" id = "live-row">
            <div class = "col" id = "live-col-check">
                <div class = "row" id = "live-row-check">
                <h3>Problem Type</h3>
                </div>
                <div class = "row" id = "live-row-check">
                <input type="checkbox" id="fireDisplayed" checked={!this.state.blockFire} onChange={this.fireChangeState.bind(this)}/>
                <label for="fireDisplayed">Fire</label>
                </div>
                <div class = "row" id = "live-row-check">
                <input type="checkbox" id="floodDisplayed" checked={!this.state.blockFlood} onChange={this.floodChangeState.bind(this)}/>
                <label for="floodDisplayed">Flood</label>
                </div>
                <div class = "row" id = "live-row-check">
                <input type="checkbox" id="powerDisplayed" checked={!this.state.blockPower} onChange={this.powerChangeState.bind(this)}/>
                <label for="powerDisplayed">Power</label>
                </div>
                <div class = "row" id = "live-row-check">
                <input type="checkbox" id="medicalDisplayed" checked={!this.state.blockMedical} onChange={this.medicalChangeState.bind(this)}/>
                <label for="medicalDisplayed">Medical</label>
                </div>
                <div class = "row" id = "live-row-check">
                <h3>Priority Level</h3>
                </div>
                <div class = "row" id = "live-row-check">
                <input type="checkbox" id="lowDisplayed" checked={!this.state.blockLow} onChange={this.lowChangeState.bind(this)}/>
                <label for="lowDisplayed">Low</label>
                </div>
                <div class = "row" id = "live-row-check">
                <input type="checkbox" id="mediumDisplayed" checked={!this.state.blockMedium} onChange={this.mediumChangeState.bind(this)}/>
                <label for="mediumDisplayed">Medium</label>
                </div>
                <div class = "row" id = "live-row-check">
                <input type="checkbox" id="highDisplayed" checked={!this.state.blockHigh} onChange={this.highChangeState.bind(this)}/>
                <label for="highDisplayed">High</label>
                </div>
                <div class = "row" id = "live-row-check">
                <input type="checkbox" id="criticalDisplayed" checked={!this.state.blockCritical} onChange={this.criticalChangeState.bind(this)}/>
                <label for="criticalDisplayed">Critical</label>
                </div>
            </div>
            <div class = "col" id = "live-col-feed">
                {this.props.invoices.map( 
                ({names,expenses}) => 
                <div id = "whole-post">
                    <div><br/><br/></div>
                    <div class = "row" id = "live-row-feed">
                    <div class = "col" id = "profile-msg">
                      <div class = "row" id = "credit-row-label">
                        <div class = "col" id = "message-col-invoice">
                            <b>Names:</b>
                        </div>
                      </div>
                      <div class = "row" id = "credit-row-label">
                        {names.map((name) =>
                        <div class = "col" id = "member-col">
                            {name}
                        </div>
                        )}
                      </div>
                      <div class = "row" id = "credit-row-label">
                        <div class = "col" id = "message-col-invoice">
                            <b>Message:</b>
                        </div>
                        <div class = "col" id = "amount-col">
                            <b>Amount:</b>
                        </div>
                      </div>
                      {expenses.map(({amount, message}) =>
                        <div class = "row" id = "credit-row-label">
                            <div class = "col" id = "message-col-invoice">
                                {message}
                            </div>
                            <div class = "col" id = "amount-col">
                                {amount}
                            </div>
                        </div>
                        )}
                    </div>
                    </div> <br /> <br /> <br /> <br />
                </div>
                )}
            </div>
            </div>
        </div>
      );
    }
  };

  export default InvoiceOverview;