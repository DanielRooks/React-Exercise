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
                <NavLink to="/CreditMember" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Credit Member</NavLink>
              </div>
              <div class = "col page-links-bar">
                <NavLink to="/" class = "page-link" activeStyle={{ color: 'coral' }} exact={true} id = "nav">Back</NavLink>
              </div>
            </div>
          </h1>
      </div>
    );
  };

class CreditMember extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            members: this.props.members,
            selectedMember: "none",
            selectedAmount: 0,
            selectedMessage: "none",
            formSubmitted: false
        };
        this.selectMember = this.selectMember.bind(this);
        this.selectAmount = this.selectAmount.bind(this);
        this.selectMessage = this.selectMessage.bind(this);
        this.submitSelected = this.submitSelected.bind(this);
    }

    selectMember(event) {
        if (event.target.value != -1){
            this.setState({selectedMember: event.target.value});
        }
    }

    selectAmount(event) {
        this.setState({selectedAmount: event.target.value});
    }

    selectMessage(event) {
        this.setState({selectedMessage: event.target.value});
    }

    submitSelected = (event) => {
        event.preventDefault();
        for (var i = 0; i < this.state.members.length; i++) {
            if(this.state.members[i].id == this.state.selectedMember){
                this.state.members[i].credit.push({
                    amount: this.state.selectedAmount,
                    message: this.state.selectedMessage
                })
            }
        }
        this.setState({formSubmitted: true});
        window.alert("Credit Submitted");
    }
  
    render () {

        if (this.state.formSubmitted === true) {
            return (<Redirect to='/' />)
        }

        return (
            <div>
                <NavigationBar />
                <div class = "row" id = "credit-row">
                    <h1>Credit A Member</h1>
                </div>
                <form onSubmit={this.submitSelected}>
                    <div class = "row" id = "credit-row">
                        <div class = "col" id = "credit-col">
                            <div class = "row" id = "credit-row-label">
                                Select Member:
                            </div>
                            <div class = "row" id = "credit-row-entry">
                                <select value={this.state.value} onChange={this.selectMember} id = "credit-row-field">
                                    <option value={-1}>Select</option>
                                    {this.props.members.map( 
                                    ({name,id}) => 
                                        <option value={id} key={id}>{name}</option>
                                    )};
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class = "row" id = "credit-row">
                        <div class = "col" id = "credit-col">
                            <div class = "row" id = "credit-row-label">
                                Enter Value:
                            </div>
                            <div class = "row" id = "credit-row-entry">
                                <input type="number" value={this.state.value} onChange={this.selectAmount} id = "credit-row-field"/>
                            </div>
                        </div>
                    </div>
                    <div class = "row" id = "credit-row">
                        <div class = "col" id = "credit-col">
                            <div class = "row" id = "credit-row-label">
                                Message:
                            </div>
                            <div class = "row" id = "credit-row-entry">
                                <textarea value={this.state.value} onChange={this.selectMessage} id = "credit-row-field"/>
                            </div>
                        </div>
                    </div>
                    <div class = "row" id = "credit-row">
                        <div class = "col" id = "credit-submit">
                            {/* <div class = "row" id = "credit-row-submit"> */}
                                <input type="submit" value="Submit" id = "submission-button"/>
                            {/* </div> */}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
  };

  export default CreditMember;