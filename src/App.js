import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import MemberBalances from "./components/MemberBalances";
import CreditMember from "./components/CreditMember";
import BalanceSummary from "./components/BalanceSummary";
import InvoiceOverview from "./components/InvoiceOverview";
import DraftInvoice from "./components/DraftInvoice";

// Install the socket io client using:
//    npm install socket.io
//
// Then import socket io and create a socket:
//
import io from 'socket.io-client';
const socket = io('http://localhost:3001');
//
// See: https://socket.io/get-started/chat
//      https://www.npmjs.com/package/socket.io-client

class Home extends React.Component {
  render () {
    return (
      <div>
        <NavigationBar />
        <div class = "row" id = "home-row">
          <div class = "col page-links-bar">
            <NavLink to="/CreditMember" class = "page-link" activeStyle={{ color: 'coral' }} id = "nav">Credit Member</NavLink>
          </div>
          <div class = "col page-links-bar">
            <NavLink to="/DraftInvoice" class = "page-link" activeStyle={{ color: 'coral' }} id = "nav">Draft Invoice</NavLink>
          </div>
        </div>

        <div class = "row" id = "home-row">
          <div class = "col" id = "home-col">
            <NavLink to="/BalanceSummary" class = "page-link" activeStyle={{ color: 'coral' }} id = "nav">Balance Summary</NavLink>
          </div>
        </div>
        <div class = "row" id = "home-row">
          <div class = "col" id = "home-col">
            <NavLink to="/MemberBalances" class = "page-link" activeStyle={{ color: 'coral' }} id = "nav">Member Balances</NavLink>
          </div>
        </div>
        <div class = "row" id = "home-row">
          <div class = "col" id = "home-col">
            <NavLink to="/InvoiceOverview" class = "page-link" activeStyle={{ color: 'coral' }} id = "nav">Invoice Overview</NavLink>
          </div>
        </div>
      </div>
    );
  }
};

function NavigationBar() {
  return (
    <div>
        <h1>
          <div class = "row">
            <div class = "col page-links-bar">
              <NavLink to="/" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Home</NavLink>
            </div>
          </div>
        </h1>
    </div>
  );
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {members: [], incrementId: 0, selectedMember: 0, invoices: []};

    // We can setup the event handlers for the messages in the constructor...
    socket.on('connect', function(){

      console.log("Connect....");

      // When we receive a social media message, call setState and insert 
      // it into the array of posts
      socket.on('post', 

        function(data) {

          // Can uncomment this to see the raw data coming in...
          // console.log("post: " + JSON.stringify(data));

          // increment the next unique ID, and put post data into the list of 
          // posts... use the '...' syntax to make this insertion easier:
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
          this.setState( 
            {members: [...this.state.members,
                     {name: data.name, 
                      image: data.image, 
                      content: data.content, 
                      problem: data.problem,
                      priority: data.priority,
                      debit: data.debit,
                      credit: data.credit,
                      id: this.state.incrementId}]
            ,incrementId: this.state.incrementId + 1} );
        }.bind(this),);
        // ^^ Like other event handlers, we bind the callback function to the 
        // component so we can use setState        

    }.bind(this));
    // ^^ ... And same with the callback function for when a connection is made
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/MemberBalances" render={({location}) => <MemberBalances members={this.state.members} selectedMember={this.state.selectedMember}/>} />
          <Route path="/CreditMember" render={() => <CreditMember members={this.state.members} />} />
          <Route path="/BalanceSummary" render={() => <BalanceSummary members={this.state.members} />} />
          <Route path="/InvoiceOverview" render={() => <InvoiceOverview members={this.state.members} />} />
          <Route path="/DraftInvoice" render={() => <DraftInvoice members={this.state.members} />} />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }

}

export default App;
