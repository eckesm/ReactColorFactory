import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AddColor.css';

const AddColor = ({ addColor }) => {
	const [ newColor, setNewColor ] = useState('');
	const history = useHistory();
	const handleChange = e => {
		setNewColor(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		addColor(newColor);
		history.push('/');
	};

	return (
		<form className="AddColor" style={{ backgroundColor: newColor }}>
			<input
				type="text"
				className="AddColor-input"
				onChange={handleChange}
				placeholder="Infinite options, but we need one with a name!"
				value={newColor}
			/>
			<button className="AddColor-submit" onClick={handleSubmit}>
				Add to the Rainbow!
			</button>
		</form>
	);
};

export default AddColor;
