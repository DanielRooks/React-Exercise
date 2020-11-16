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

class BalanceSummary extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

        members: this.props.members,
        totalCredit: 0,
        totalDebit: 0,

        high_low: false,

        blockFire: false,
        blockFlood: false,
        blockPower: false,
        blockMedical: false,
  
        blockLow: false,
        blockMedium: false,
        blockHigh: false,
        blockCritical: false
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

    onChangeOrder = (event) => {
      event.preventDefault();
      if (event.target.value == "amountHigh"){
        this.setState({high_low: true});
      } else {
        this.setState({high_low: false});
      }
    }
  
    render () {

      var totalCreditTally = 0;
      var totalDebitTally = 0;
      var creditTransactions = [];
      var debitTransactions = [];
      for (var i = 0; i < this.props.members.length; i++) {
        for (var j = 0; j < this.props.members[i].credit.length; j++) {
            totalCreditTally += this.props.members[i].credit[j].amount;
            creditTransactions.push({name: this.props.members[i].name, amount: this.props.members[i].credit[j].amount, message: this.props.members[i].credit[j].message});
        }
        for (var j = 0; j < this.props.members[i].debit.length; j++) {
            totalDebitTally += this.props.members[i].debit[j].amount;
            debitTransactions.push({name: this.props.members[i].name, amount: this.props.members[i].debit[j].amount, message: this.props.members[i].debit[j].message});
        }
      }

      if (this.state.high_low){
        creditTransactions = creditTransactions.sort(({ amount: a }, { amount: b }) => b - a);
        debitTransactions = debitTransactions.sort(({ amount: a }, { amount: b }) => b - a);
      } else {
        creditTransactions = creditTransactions.sort(({ amount: a }, { amount: b }) => a - b);
        debitTransactions = debitTransactions.sort(({ amount: a }, { amount: b }) => a - b);
      }

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
                <h1>Total Credit: {totalDebitTally}</h1>
                <h1>Overall Balance: {totalDebitTally - totalCreditTally}</h1>
                <h1>Total Debit: {totalCreditTally}</h1>
            </div>
            <div class = "row" id = "live-row">
                <div class = "col" id = "live-col-check">
                <div onChange={this.onChangeOrder}>
                  <div class = "row" id = "live-row-check">
                    <h3>Sort by ID</h3>
                  </div>
                  <div class = "row" id = "live-row-check">
                    <input type="radio" id="floodDisplayed" value='amountHigh' name="orderGroup"/>
                    <label for="floodDisplayed">High - Low</label>
                  </div>
                  <div class = "row" id = "live-row-check">
                    <input type="radio" id="powerDisplayed" value='amountLow' name="orderGroup"/>
                    <label for="powerDisplayed">Low - High</label>
                  </div>
                </div>
              </div>
                <div class = "col" id = "live-col-feed">
                  <h2>Debit Transactions:</h2>
                    <div id = "whole-post-balance">
                        <div class = "row" id = "live-row-feed">
                        <div class = "col" id = "profile-info">
                            {debitTransactions.map(
                            ({name,amount,message}) =>
                              <div>
                                <div id = "transaction-listing">
                                  <b>Member Name:</b>{" " + name}<br /><br />
                                  <b>Transaction Amount:</b>{" " + amount}<br /><br />
                                  <b>Transaction Description:</b><br />{" " + message}<br />
                                </div><br />
                              </div>
                            )}
                        </div>
                        </div>
                    </div>
                    <h2>Credit Transactions:</h2>
                    <div id = "whole-post-balance">
                        <div class = "row" id = "live-row-feed">
                        <div class = "col" id = "profile-info">
                            {creditTransactions.map(
                            ({name, amount,message}) =>
                              <div>
                                <div id = "transaction-listing">
                                  <b>Member Name:</b>{" " + name}<br /><br />
                                  <b>Transaction Amount:</b>{" " + amount}<br /><br />
                                  <b>Transaction Description:</b><br />{" " + message}<br />
                                </div><br />
                              </div>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  };

  export default BalanceSummary;