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
        invoices: this.props.invoices
      };

      this.removeInvoice = this.removeInvoice.bind(this);
    }

    removeInvoice = (event, index) => {
        event.preventDefault();
        var a = this.state.invoices;
        a.splice(index, 1);
        this.setState({invoices: a});
    }
  
    render () {
  
      return (
        <div>
            <NavigationBar />
            <div class = "row" id = "credit-row">
                <h1>Pay An Invoice</h1>
            </div>
            <div class = "row" id = "live-row-selected">
            <div class = "col" id = "live-col-feed">
            {this.props.invoices.length > 0 ? (
                          <div>
                {this.props.invoices.map( 
                ({names,expenses,total}, index) => 
                <div id = "whole-post-selected">
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
                        <div class = "row" id = "credit-row-label">
                            <div class = "col" id = "message-col-invoice">
                            </div>
                            <div class = "col" id = "amount-col">
                                {total}
                            </div>
                        </div>
                        <div class = "row" id = "credit-row-label">
                            <div class = "col" id = "message-col-invoice">
                                <button onClick={(event) => this.removeInvoice(event, index)}  id = "submission-button">
                                    Pay
                                </button>
                            </div>
                        </div>
                    </div>
                    </div> <br /> <br /> <br /> <br />
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