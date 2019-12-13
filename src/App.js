import React from 'react';
import { Frames } from './components/frames';
import { Card } from './components/cardInput/card';
import { Cvv } from './components/cvvInput/cvv';
import { Date } from './components/dateInput/date';

import './App.css';

export class App extends React.Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			validForm: false,
		};
	}

	frameActivated = (evt) => {
		console.log(`${evt.element} frame activated`);
	}

	frameFocus = (evt) => {
		console.log(`${evt.element} frame focused`);
	}

	frameBlur = (evt) => {
		console.log(`${evt.element} frame blured`);
	}

	frameValidationChanged = (evt) => {
		console.log(`For ${evt.element} isValid = ${evt.isValid} isEmpty = ${evt.isEmpty}`);
	}

	paymentMethodChanged = (evt) => {
		console.log(evt);
	}

	cardValidationChanged = (evt) => {
		this.setState({
			validForm: evt.isValid
		})
	}

	cardSubmitted = (evt) => {
		console.log("SUBMITTED");
	}

	cardTokenized = (evt) => {
		console.log("Toke, generate: " + evt.token + " Now you can send a payment request from your server with this token");
	}

	cardTokenizationFailed = (evt) => {
		console.log(evt);
	}

	submitCard = () => {
		Frames.submitCard();
	}


	render() {
		const { validForm } = this.state;
		const config = {
			publicKey: 'pk_test_4296fd52-efba-4a38-b6ce-cf0d93639d8a',
			debug: false,
			localization: {
				cardNumberPlaceholder: 'Card number',
				expiryMonthPlaceholder: 'MM',
				expiryYearPlaceholder: 'YY',
				cvvPlaceholder: 'CVV'
			},
			style: {},
			cardholder: {
				name: 'John Smith',
				billingAddress: {}
			}
		}
		return (
			<div className="App" >
				<Frames
					config={config}
					ready={this.ready}
					frameActivated={this.frameActivated}
					frameFocus={this.frameFocus}
					frameBlur={this.frameBlur}
					frameValidationChanged={this.frameValidationChanged}
					paymentMethodChanged={this.paymentMethodChanged}
					cardValidationChanged={this.cardValidationChanged}
					cardSubmitted={this.cardSubmitted}
					cardTokenized={this.cardTokenized}
					cardTokenizationFailed={this.cardTokenizationFailed}
				>
					<div id="payment-form" >
						<Card />
						<div className="date-and-code">
							<Date />
							<Cvv />
						</div>

						<button
							className='pay-button'
							disabled={!validForm}
							onClick={this.submitCard}
						>
							Pay $20
					</button>
					</div>
				</Frames>
			</div >
		);
	}

}

export default App;

