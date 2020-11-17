import React, {useCallback} from 'react';
import './../App.css';
import {NavLink, Redirect} from 'react-router-dom';

function NavigationBar() {
    return (
      <div>
          <h1>
            <div class = "row page-links-row">
              <div class = "col page-links-bar">
                <NavLink to="/" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Home</NavLink>
                <NavLink to="/DraftInvoice" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Draft Invoice</NavLink>
              </div>
              <div class = "col page-links-bar">
                <NavLink to="/" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Back</NavLink>
              </div>
            </div>
          </h1>
      </div>
    );
  };

class DraftInvoice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            members: this.props.members,
            selectedMembers: [],
            invoiceExpenses: [],
            selectedAmount: 0,
            selectedMessage: "none",
            formSubmitted: false,
            invoices: this.props.invoices
        };
        this.selectMembers = this.selectMembers.bind(this);
        this.selectAmount = this.selectAmount.bind(this);
        this.selectMessage = this.selectMessage.bind(this);
        this.submitSelected = this.submitSelected.bind(this);
        this.submitExpense = this.submitExpense.bind(this);
    }

    selectMembers(event) {
        if (!this.state.selectedMembers.includes(event.target.value) && event.target.value != -1){
            this.setState({selectedMembers: [...this.state.selectedMembers, event.target.value]});
        }
    }

    selectAmount(event) {
        this.setState({selectedAmount: event.target.value});
    }

    selectMessage(event) {
        this.setState({selectedMessage: event.target.value});
    }

    submitExpense = (event) => {
        event.preventDefault();
        this.setState({invoiceExpenses: [...this.state.invoiceExpenses, {amount: this.state.selectedAmount, message: this.state.selectedMessage}]});
    }

    submitSelected = (event) => {
        event.preventDefault();
        var totalAmount = 0;
        for (var i = 0; i < this.state.invoiceExpenses.length; i++) {
            totalAmount += Number(this.state.invoiceExpenses[i].amount);
        }
        this.state.invoices.push({
            names: this.state.selectedMembers,
            expenses: this.state.invoiceExpenses,
            total: totalAmount
        })
        this.setState({formSubmitted: true});
    }
  
    render () {

        if (this.state.formSubmitted === true) {
            return (<Redirect to='/' />)
        }

        return (
            <div>
                <NavigationBar />
                <div class = "row" id = "credit-row">
                    <h1>Draft An Invoice</h1>
                </div>
                    <div class = "row" id = "credit-row">
                        <div class = "col" id = "credit-col">
                            <div class = "row" id = "credit-row-label">
                                <div class = "col"> Select Members:</div>
                            </div>
                            <div class = "row" id = "credit-row-entry">
                                <select value={this.state.value} onChange={this.selectMembers} id = "credit-row-field">
                                    <option value={-1}>Select</option>
                                    {this.props.members.map( 
                                    ({name,id}) => 
                                        <option value={name} key={id}>{name}</option>
                                    )};
                                </select>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.submitExpense}>
                    <div class = "row" id = "credit-row-large">
                        <div class = "col" id = "credit-col">
                            <div class = "row" id = "credit-row-label">
                                Enter Value:
                            </div>
                            <div class = "row" id = "credit-row-entry">
                                <input type="number" value={this.state.value} onChange={this.selectAmount} id = "credit-row-field"/>
                            </div>
                            <div class = "row" id = "credit-row-label">
                                Message:
                            </div>
                            <div class = "row" id = "credit-row-entry">
                                <textarea value={this.state.value} onChange={this.selectMessage} id = "credit-row-field"/>
                            </div>
                            <div class = "row" id = "credit-row-entry">
                                <input type="submit" value="Add Expense"  id = "submission-button"/>
                            </div>
                        </div>
                    </div>
                    </form>
                    <div class = "row" id = "credit-row-expanding">
                        <div class = "col" id = "credit-col-expanding">
                            <div class = "row" id = "credit-row-label">
                                <div class = "col"><b>Invoice Draft</b></div>
                            </div>
                            <div class = "row" id = "credit-row-label">
                                <div class = "col"><b>Names:</b></div>
                            </div>
                            <div class = "row" id = "credit-row-label">
                                {this.state.selectedMembers.map((name) =>
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
                            {this.state.invoiceExpenses.map(({amount, message}) =>
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
                    </div>
                    <div class = "row" id = "credit-row">
                        <div class = "col" id = "credit-submit">
                            {/* <div class = "row" id = "credit-row-submit"> */}
                                <button onClick={this.submitSelected} id = "submission-button">Submit</button>
                            {/* </div> */}
                        </div>
                    </div>
            </div>
        );
    }
};

export default DraftInvoice;