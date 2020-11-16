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
        if (!this.state.selectedMembers.includes(event.target.value)){
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
        this.state.invoices.push({
            names: this.state.selectedMembers,
            expenses: this.state.invoiceExpenses
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
                <h1>Draft Invoice</h1>
                    <div class = "row" id = "credit-row">
                        <div class = "col" id = "credit-col">
                            <div class = "row" id = "credit-row-label">
                                <div class = "col"> Select Members:</div>
                            </div>
                            <div class = "row" id = "credit-row-entry">
                                <select value={this.state.value} onChange={this.selectMembers}>
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
                                Enter Value: {this.state.selectedAmount}
                            </div>
                            <div class = "row" id = "credit-row-entry">
                                <input type="text" value={this.state.value} onChange={this.selectAmount} />
                            </div>
                            <div class = "row" id = "credit-row-label">
                                Message: {this.state.selectedMessage}
                            </div>
                            <div class = "row" id = "credit-row-entry">
                                <textarea value={this.state.value} onChange={this.selectMessage} />
                            </div>
                            <div class = "row" id = "credit-row-entry">
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                    </form>
                    <div class = "row" id = "credit-row">
                        <div class = "col" id = "credit-col">
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
                        <div class = "col" id = "credit-col">
                            <div class = "row" id = "credit-row-submit">
                                <button onClick={this.submitSelected}>Submit</button>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
};

export default DraftInvoice;