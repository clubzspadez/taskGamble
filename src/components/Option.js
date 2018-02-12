import React from 'react';
import Options from './Options';

const Option = (props) => (
	<div>
		<p>{props.option}</p>
		<button onClick={(e) => props.handleDeleteOption(props.option)}>Delete</button>
	</div>
);

 export default Option;