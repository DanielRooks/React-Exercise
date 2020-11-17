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
                <NavLink to="/InvoiceOverview" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Invoice Overview</NavLink>
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
        invoices: this.props.invoices,
        searching: false,
        searchedName: null
      }
      this.searchName = this.searchName.bind(this);
    }

    searchName(event) {
      if(event.target.value != ''){
        this.setState({searchedName: event.target.value});
        this.setState({searching: true});
      }else{
        this.setState({searching: false});
      }
      
    }
  
    render () {
  
      return (
        <div>
            <NavigationBar />
            <div class = "row" id = "credit-row">
                <h1>Invoice Overview</h1>
            </div>
            <div class = "row" id = "live-row">
            <div class = "col" id = "live-col-check">
                <div class = "row" id = "live-row-check">
                 <h3>Name Search</h3>
                </div>
                <div class = "row" id = "live-row-check">
                  <textarea value={this.state.value} onChange={this.searchName} id = "credit-row-field"/>
                </div>
            </div>
            <div class = "col" id = "live-col-feed">
              {this.props.invoices.length > 0 ? (
              <div>
                {this.props.invoices.map( 
                ({names,expenses,total}) => 
                <div>
                {!this.state.searching || names.includes(this.state.searchedName) ? (
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
                        <div class = "col" id = "member-col-small">
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
                        <div class = "row" id = "credit-row-label">
                          <div class = "col" id = "message-col-invoice">
                          </div>
                          <div class = "col" id = "amount-col">
                            <br/><b>Total:</b>
                          </div>
                        </div>
                        <div class = "row" id = "credit-row-label">
                          <div class = "col" id = "message-col-invoice">
                          </div>
                          <div class = "col" id = "amount-col">
                            {total}
                          </div>
                        </div>
                    </div>
                    </div> <br /> <br /> <br /> <br />
                </div>
                ) : (
                  <div></div>
                )}
                </div>
                )}
              </div>
              ) : (
                <div id = "transaction-listing">No Invoices To Show</div>
              )}
            </div>
            </div>
        </div>
      );
    }
  };

  export default InvoiceOverview;