import React, { useState } from 'react';

function Form({ setCity }) {
	const [ input, setInput ] = useState('');

	const handleChange = (e) => {
		//console.log(e.target.value);
		setInput(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		//console.log('Form.js onSubmit Clicked');
		setCity(input);
		setInput('');
	};

	return (
		<div className="Form">
			<form onSubmit={onSubmit}>
				<input type="text" placeholder="Search by City" value={input} onChange={handleChange} />
				<input type="submit" />
			</form>
		</div>
	);
}

export default Form;
