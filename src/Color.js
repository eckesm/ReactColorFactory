import { Redirect, useParams } from 'react-router-dom';
import './Color.css';

const Color = ({ colors }) => {
	let { name } = useParams();
	name = name.toLowerCase();
	if (colors.includes(name)) {
		return <div className="Color" data-testid={name} style={{ backgroundColor: name }} />;
	}
	else {
		return <Redirect to="/colors" />;
	}
};
export default Color;
