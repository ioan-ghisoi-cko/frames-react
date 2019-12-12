import React from 'react';

export function ExpiryDate(props) {
	const FRAME_IDENTIFIER = 'expiry-date-frame';
	return (
		<div
			{...props}
			className={props.className !== undefined ? +`${props.className} ${FRAME_IDENTIFIER}` : FRAME_IDENTIFIER}
		/>
	);
}
