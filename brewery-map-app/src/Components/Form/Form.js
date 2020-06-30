import React, { useState } from 'react';

function Form({ setSearch }) {
	const [ input, setInput ] = useState('');

	const handleChange = (e) => {
		//console.log(e.target.value);
		setInput(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		//console.log('Form.js onSubmit Clicked');
		setSearch(input);
		setInput('');
	};

	return (
		<div className="Form">
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Search by City,State,or Brewery Name"
					value={input}
					onChange={handleChange}
				/>
				<input type="submit" />
			</form>
		</div>
	);
}

export default Form;
