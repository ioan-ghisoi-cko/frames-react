import React from 'react';
import { CardNumber } from '../frames';

export function Card(props) {
	return (
		<div>
			<label htmlFor="card-number">Card number</label>
			<div className="input-container card-number">
				<div className="icon-container">
					<img id="icon-card-number" src="images/card-icons/card.svg" alt="PAN" />
				</div>
				<CardNumber />
				<div className="icon-container payment-method">
					<img id="logo-payment-method" alt="" />
				</div>
				<div className="icon-container">
					<img id="icon-card-number-error" src="images/card-icons/error.svg" alt="" />
				</div>
			</div>
		</div>
	);
}
