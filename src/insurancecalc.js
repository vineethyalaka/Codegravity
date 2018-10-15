import React, { Component } from 'react';

class Calc extends React.component {
	render(){
		return(
		<div>
		<table>
		<tr>
		<td>
		{this.props.lenderName}	</td>	
		<td>{this.props.loanType} </td>		
		<td>{this.props.interestRate} </td>
		<td>{this.props.closingCosts} </td>
		<td>{this.props.monthlyPayment} </td>
		<td>{this.props.apr} </td>
		</tr>
		</table>
		</div>
		);
}
};

export default Form;