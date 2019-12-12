import React from 'react';

export function CardNumber(props) {
	const FRAME_IDENTIFIER = 'card-number-frame';
	return (
		<div
			{...props}
			className={props.className !== undefined ? +`${props.className} ${FRAME_IDENTIFIER}` : FRAME_IDENTIFIER}
		/>
	);
}
