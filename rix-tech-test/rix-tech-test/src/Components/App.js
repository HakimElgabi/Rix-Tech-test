import '../CSS/App.css';
import React, { Component } from 'react';
import json from '../companies.json';
import Company from './Company';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: "",
      chosenCompany: "SPINACH LIMITED",
    };
  }

  handleChange(event) {
    this.setState({ chosenCompany: event.target.value });
  }

  onFieldChange = event => {
    this.setState({ userEmail: event.target.value });
  }

  submitTest(event) {
    event.preventDefault();
    if (this.state.userEmail) {
      let tempObject = null;

      json.items.forEach((item) => {
        if (item.title === this.state.chosenCompany) {
          tempObject = item;
        }
      });

      const output = {
        email: this.state.userEmail,
        companyName: tempObject.title,
        companyAddress: tempObject.address_snippet,
        companyNumber: tempObject.company_number
      }
      console.log(output);
      alert(`Email: ${output.email} \nChosen Company: ${output.companyName}\nCompany Address: ${output.companyAddress}\nCompany Number: ${output.companyNumber}`);
    } else {
      alert('Please enter an email address');
    }
  }

  renderDropDown = () => {
    const companyList = [];
    json.items.forEach((item) => {
      companyList.push(<Company key={item.title} title={item.title} />);
    });

    return (
      <select value={this.state.chosenCompany} onChange={this.handleChange.bind(this)}>
        {companyList}
      </select>
    );
  }

  render = () => {
    return (
      <div class="landing-page">
        <div class="form">
          <form class="landing-form">
            <p class="title">Landing Page</p>
            <input type="text" placeholder="Enter Email" onChange={this.onFieldChange} value={this.state.userEmail} />
            <p>Choose a Company</p>
            {this.renderDropDown()}
            <button onClick={this.submitTest.bind(this)}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
