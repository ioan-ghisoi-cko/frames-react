import React from 'react';
import { Cvv as SecurityCode } from '../frames';

export function Cvv(props) {
	return (
		<div>
			<label htmlFor="cvv">Security code</label>
			<div className="input-container cvv">
				<div className="icon-container">
					<img id="icon-cvv" src="images/card-icons/cvv.svg" alt="CVV" />
				</div>
				<SecurityCode />
				<div className="icon-container">
					<img id="icon-cvv-error" src="images/card-icons/error.svg" alt="" />
				</div>
			</div>
		</div>
	);
}
