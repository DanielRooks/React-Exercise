import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import MemberBalances from "./components/MemberBalances";
import CreditMember from "./components/CreditMember";
import BalanceSummary from "./components/BalanceSummary";
import InvoiceOverview from "./components/InvoiceOverview";
import DraftInvoice from "./components/DraftInvoice";

// // Install the socket io client using:
// //    npm install socket.io
// //
// // Then import socket io and create a socket:
// //
// import io from 'socket.io-client';
// const socket = io('http://localhost:3001');
// //
// // See: https://socket.io/get-started/chat
// //      https://www.npmjs.com/package/socket.io-client

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

      this.populate = this.populate.bind(this);
    }

    populate = (event) => {
      event.preventDefault();

      var random = require('random-name');
      const LoremIpsum = require("lorem-ipsum").LoremIpsum;
  
      const lorem = new LoremIpsum({});
      var count = 0;
  
      while (count < 10)
      {
        // Randomly generate debit transactions
        var numTransactions = Math.floor(Math.random() * 10);
        var debitTrans = [];
        for (var i = 0; i < numTransactions; i ++){
          debitTrans.push({
            amount: Math.floor(Math.random() * 100),
            message: lorem.generateWords(Math.floor(Math.random() * 12) + 3)
          });
        }
  
        // Randomly generate credit transactions
        var numTransactions = Math.floor(Math.random() * 10);
        var creditTrans = [];
        for (var i = 0; i < numTransactions; i ++){
          creditTrans.push({
            amount: Math.floor(Math.random() * 100),
            message: lorem.generateWords(Math.floor(Math.random() * 12) + 3)
          });
        }
  
        // Randomly generate the post content
        var typePost = Math.floor(Math.random() * 10);
        var postContent = lorem.generateWords(Math.floor(Math.random() * 42) + 3)
  
        // Randomly generate a fire, flood, power or medical problem
        var typeProblem = Math.floor(Math.random() * 4);
        var problemType = "";
        if (typeProblem == 0) problemType = "Fire";
        else if (typeProblem == 1) problemType = "Flood"
        else if (typeProblem == 2) problemType = "Power"
        else if (typeProblem == 3) problemType = "Medical"
  
        // Randomly generate the priority level of the problem
        var typePriority = Math.floor(Math.random() * 4);
        var priorityLevel = "";
        if (typePriority == 0) priorityLevel = "Low";
        else if (typePriority == 1) priorityLevel = "Medium"
        else if (typePriority == 2) priorityLevel = "High"
        else if (typePriority == 3) priorityLevel = "Critical"
  
        // build the social media post content
        var post = 
        {
          name: random.first() + " " + random.last(),
          image: process.env.PUBLIC_URL + '/images/' + (Math.floor(Math.random() * 114) + 1) + ".jpg",
          problem: problemType,
          priority: priorityLevel,
          content: postContent,
          debit: debitTrans,
          credit: creditTrans
        }
  
        this.setState( 
          {members: [...this.state.members,
                    {name: post.name, 
                    image: post.image, 
                    content: post.content, 
                    problem: post.problem,
                    priority: post.priority,
                    debit: post.debit,
                    credit: post.credit,
                    id: this.state.incrementId}]
          ,incrementId: this.state.incrementId + 1} );
  
        count ++;
    }

    // // We can setup the event handlers for the messages in the constructor...
    // socket.on('connect', function(){

    //   console.log("Connect....");

    //   // When we receive a social media message, call setState and insert 
    //   // it into the array of posts
    //   socket.on('post', 

    //     function(data) {

    //       // Can uncomment this to see the raw data coming in...
    //       // console.log("post: " + JSON.stringify(data));

    //       // increment the next unique ID, and put post data into the list of 
    //       // posts... use the '...' syntax to make this insertion easier:
    //       // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
    //       this.setState( 
    //         {members: [...this.state.members,
    //                  {name: data.name, 
    //                   image: data.image, 
    //                   content: data.content, 
    //                   problem: data.problem,
    //                   priority: data.priority,
    //                   debit: data.debit,
    //                   credit: data.credit,
    //                   id: this.state.incrementId}]
    //         ,incrementId: this.state.incrementId + 1} );
    //     }.bind(this),);
    //     // ^^ Like other event handlers, we bind the callback function to the 
    //     // component so we can use setState        

    // }.bind(this));
    // // ^^ ... And same with the callback function for when a connection is made
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/MemberBalances" render={({location}) => <MemberBalances members={this.state.members} selectedMember={this.state.selectedMember}/>} />
          <Route path="/CreditMember" render={() => <CreditMember members={this.state.members} />} />
          <Route path="/BalanceSummary" render={() => <BalanceSummary members={this.state.members} />} />
          <Route path="/InvoiceOverview" render={() => <InvoiceOverview members={this.state.members} invoices={this.state.invoices}/>} />
          <Route path="/DraftInvoice" render={() => <DraftInvoice members={this.state.members} invoices={this.state.invoices}/>} />
          <Route component={Error} />
        </Switch>
        <div id = "bottom-right">
          <button onClick={(event) => this.populate(event)}>
            Populate
          </button>
        </div>
      </main>
    );
  }

}

export default App;
