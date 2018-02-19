import React from 'react';
import Options from './Options';

const Option = (props) => (
	<div className="option">
		<p className="option__text">{props.count}.{props.option}</p>
		<button className="button button--link" onClick={(e) => props.handleDeleteOption(props.option)}>Delete</button>
	</div>
);

 export default Option;