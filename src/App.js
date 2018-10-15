import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./form.js";
import calc from "./insurancecalc.js"


Const API_Key = "RG-AUTH 28e00bcd-576a-45ae-a879-710a1a1f493e";

class App extends Component {
	
	disp = {
		lender: undefined,
		product: undefined,
		rate: undefined,
		closingcost: undefined,
		Monthlypay: undefined,
		apr: undefined
	}
	calc = async(e) => {
		e.preventDefault();
		
		const loan = e.target.elements.LoanSize.value;
		
		const credit = e.target.elements.CreditScore.value;
		
		const prop = e.target.elements.property.value;
		
		const occ = e.target.elements.property.value;
		
		const api_call =  await fetch(ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod);
	const data = await api_call.json();
	console.log(data);
	this.setdisp({
		lender: data.lenderName,
		product: data.loanType,
		rate: data.interestRate,
		closingcost: data.closingCosts,
		Monthlypay: data.monthlyPayment,
		apr: data.apr
	});
	}
  render() {
    return (
      <div className="App">
	  
        </header> 
		<h1>Rate Gravity</h1>
			<Form  calc = {this.calc}/>
			<Calc 
			Lender = {this.data.lenderName}		product = {this.data.loanType}		Rate = {this.data.interestRate}
			Closing cost = {this.data.closingCosts}
			Monthly pay = {this.data.monthlyPayment}
			APR = {this.data.apr}
			/>
			
      </div>
    );
  }
}

export default App;
