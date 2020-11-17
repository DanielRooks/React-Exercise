import React from 'react';
import './../App.css';
import {NavLink, Redirect} from 'react-router-dom';

function NavigationBar() {
  return (
    <div>
        <h1>
          <div class = "row page-links-row">
            <div class = "col page-links-bar">
              <NavLink to="/" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Home</NavLink>
              <NavLink to="/MemberBalances" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Member Balances</NavLink>
            </div>
            <div class = "col page-links-bar">
              <NavLink to="/" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Back</NavLink>
            </div>
          </div>
        </h1>
    </div>
  );
};

class MemberBalances extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

        selectedMember: this.props.selectedMember,
        buttonClicked: false,

        membersSorted: this.props.members
      };

      this.openMemberHistory = this.openMemberHistory.bind(this);
      this.closeMemberHistory = this.closeMemberHistory.bind(this);
    }
  
    openMemberHistory = (event, id) => {
      event.preventDefault();
      this.setState({selectedMember: id});
      this.setState({buttonClicked: true});
    }

    closeMemberHistory = (event) => {
      event.preventDefault();
      this.setState({buttonClicked: false});
    }

    onChangeOrder = (event) => {
      event.preventDefault();
      if (event.target.value == "idHigh"){
        this.setState({membersSorted: this.props.members.sort(({ id: a }, { id: b }) => b - a)});
      } else if (event.target.value == "idLow"){
        this.setState({membersSorted: this.props.members.sort(({ id: a }, { id: b }) => a - b)});
      } else if (event.target.value == "balanceHigh"){
        this.setState({membersSorted: this.props.members.sort(({ balance: a }, { balance: b }) => b - a)});
      } else if (event.target.value == "balanceLow"){
        this.setState({membersSorted: this.props.members.sort(({ balance: a }, { balance: b }) => a - b)});
      }
    }
  
    render () {

      var totalCredit = 0;
      var totalDebit = 0;
      for (var i = 0; i < this.props.members.length; i++) {
        for (var j = 0; j < this.props.members[i].credit.length; j++) {
          totalCredit += Number(this.props.members[i].credit[j].amount);
        }
        for (var j = 0; j < this.props.members[i].debit.length; j++) {
          totalDebit += Number(this.props.members[i].debit[j].amount);
        }

        this.props.members[i].balance = Number(totalDebit) - Number(totalCredit);

        totalCredit = 0;
        totalDebit = 0;
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

      if (this.state.buttonClicked === true) {
        return(
          <div>
            <div>
              <h1>
                <div class = "row page-links-row">
                  <div class = "col page-links-bar-special">
                    <NavLink to="/" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Home</NavLink>
                    <NavLink to="/MemberBalances" class = "page-link" exact={true} id = "nav">Member Balances</NavLink>
                    <NavLink to="/MemberBalances" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav" style={{color: "coral"}}>Member Transaction History</NavLink>
                  </div>
                  <div class = "col page-links-bar-special-two">
                    <NavLink to="/MemberBalances" class = "page-link" exact={true} id = "nav" onClick={(event) => this.closeMemberHistory(event)}>Back</NavLink>
                  </div>
                </div>
              </h1>
            </div>
            <div class = "row" id = "credit-row">
              <h1>Member Transaction History</h1>
            </div><br />
            <div class = "row" id = "live-row-selected">
              <div class = "col" id = "live-col-feed">
                  <div id = "whole-post-selected">
                      <div><br/><br/></div>
                      <div class = "row" id = "live-row-feed">
                          <div class = "col" id = "profile-image">
                              <img id = "profile-photo" src={this.state.membersSorted[this.state.selectedMember].image} alt="{name}" /> <br />
                          </div>
                      </div>
                      <div class = "row" id = "live-row-feed">
                          <div class = "col" id = "profile-info">
                              <b>{this.state.membersSorted[this.state.selectedMember].name} <br /></b>
                              Balance: {this.state.membersSorted[this.state.selectedMember].balance} <br />
                          </div>
                      </div>
                      <div class = "row" id = "live-row-feed">
                          <div class = "col" id = "profile-msg">
                              {this.state.membersSorted[this.state.selectedMember].content} <br /> <br /> <br /> <br />
                          </div>
                      </div>
                  </div>
                  <div id = "whole-post-member">
                      <div><br/><br/><br /></div>
                      <div class = "row" id = "live-row-feed">
                          <div class = "col" id = "profile-info">
                              <b>Debit List:<br /><br /></b>
                              {this.state.membersSorted[this.state.selectedMember].debit.length > 0 ? (
                              <div>
                              {this.state.membersSorted[this.state.selectedMember].debit.map(
                              ({amount,message}) =>
                              <div>
                                <div id = "transaction-listing">
                                  <b>Transaction Amount:</b>{" " + amount}<br /><br />
                                  <b>Transaction Description:</b><br />{" " + message}<br />
                                </div><br />
                              </div>
                              )}
                              </div>
                              ) : (
                                <div id = "transaction-listing">No Debit Transactions To Show</div>
                              )} <br /><br />
                          </div>
                      </div>
                  </div>
                  <div id = "whole-post-member">
                      <div><br/><br/><br /></div>
                      <div class = "row" id = "live-row-feed">
                          <div class = "col" id = "profile-info">
                              <b>Credit List:<br /><br /></b>
                              {this.state.membersSorted[this.state.selectedMember].credit.length > 0 ? (
                              <div>
                              {this.state.membersSorted[this.state.selectedMember].credit.map(
                              ({amount,message}) =>
                              <div>
                                <div id = "transaction-listing">
                                  <b>Transaction Amount:</b>{" " + amount}<br /><br />
                                  <b>Transaction Description:</b><br />{" " + message}<br />
                                </div><br />
                              </div>
                              )}
                              </div>
                              ) : (
                                <div id = "transaction-listing">No Credit Transactions To Show</div>
                              )} <br /><br />
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        );
      }
  
      return (
        <div>
            <NavigationBar />
            <div class = "row" id = "credit-row">
              <h1>Member Balances</h1>
            </div><br />
            <div class = "row" id = "live-row">
            <div class = "col" id = "live-col-check">
              <div onChange={this.onChangeOrder}>
                <div class = "row" id = "live-row-check">
                  <h3>Sort by ID</h3>
                </div>
                  <div class = "row" id = "live-row-check">
                    <input type="radio" id="floodDisplayed" value='idHigh' name="orderGroup"/>
                    <label for="floodDisplayed">High - Low</label>
                  </div>
                  <div class = "row" id = "live-row-check">
                    <input type="radio" id="powerDisplayed" value='idLow' name="orderGroup"/>
                    <label for="powerDisplayed">Low - High</label>
                  </div>
                  <div class = "row" id = "live-row-check">
                    <h3>Sort by Balance</h3>
                  </div>
                  <div class = "row" id = "live-row-check">
                    <input type="radio" id="mediumDisplayed" value='balanceHigh' name="orderGroup"/>
                    <label for="mediumDisplayed">High - Low</label>
                  </div>
                  <div class = "row" id = "live-row-check">
                    <input type="radio" id="highDisplayed" value='balanceLow' name="orderGroup"/>
                    <label for="highDisplayed">Low - High</label>
                  </div>
              </div>
            </div>
            <div class = "col" id = "live-col-feed">
              {this.state.membersSorted.length > 0 ? (
                <div>
                {this.state.membersSorted.map( 
                ({name,image,content,problem,priority,debit,credit,balance,id}, index) => 
                <div id = "whole-post" key={id}>
                    <div><br/><br/></div>
                    <div class = "row" id = "live-row-feed">
                      <div class = "col" id = "profile-image">
                          <img id = "profile-photo" src={image} alt="{name}" /> <br />
                      </div>
                    </div>
                    <div class = "row" id = "live-row-feed">
                      <div class = "col" id = "profile-info">
                          <b>{name} <br /></b>
                          Balance: {balance} <br />
                      </div>
                    </div>
                    <div class = "row" id = "live-row-feed">
                      <div class = "col" id = "profile-msg">
                        <button onClick={(event) => this.openMemberHistory(event, index)} id = "submission-button">
                          Open History
                        </button>
                      </div>
                    </div>
                    <div class = "row" id = "live-row-feed">
                      <div class = "col" id = "profile-msg">
                          {content} <br /> <br /> <br /> <br />
                      </div>
                    </div>
                </div>
                )}
                </div>
                ) : (
                  <div id = "transaction-listing">No Members To Show</div>
                )}
            </div>
            </div>
        </div>
      );
    }
  };

  export default MemberBalances;