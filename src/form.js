import React, { Component } from 'react';

class Form extends React.component {
	render(){
		return(
		<form onsubmit={this.props.calc}>
			<input type="number" name="LoanSize" placeholder="Enter Loan Amount" />
			
			<input type="number" name="CreditScore" placeholder=" Please enter value between 300 - 800"/>
			
			<select name="prop"> 
			<option value="SingleFamily">Single Family</option>
			<option value="Condo">Condo</option>
			<option value="Townhouse">Town House</option>
			<option value="MultiFamily">Multi Family</option>
			</select>
			
			<select name="occ">
			<option value="Primary">Primary</option>
			<option value="Secondary">Secondary</option>
			<option value="Investment">Investment</option>
			</select>
			
			<button>Quote Rates</button>
		</form>
		);
}
};

export default Form;