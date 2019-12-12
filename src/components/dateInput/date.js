import React from 'react';
import { ExpiryDate } from '../frames';

export function Date(props) {
	return (
		<div>
			<label htmlFor="expiry-date">Expiry date</label>
			<div className="input-container expiry-date">
				<div className="icon-container">
					<img id="icon-expiry-date" src="images/card-icons/exp-date.svg" alt="Expiry date" />
				</div>
				<ExpiryDate />
				<div className="icon-container">
					<img id="icon-expiry-date-error" src="images/card-icons/error.svg" alt="" />
				</div>
			</div>
		</div>
	);
}
