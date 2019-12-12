import React from 'react';

export function Cvv(props) {
	const FRAME_IDENTIFIER = 'cvv-frame';
	return (
		<div
			{...props}
			className={props.className !== undefined ? +`${props.className} ${FRAME_IDENTIFIER}` : FRAME_IDENTIFIER}
		/>
	);
}
