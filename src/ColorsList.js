import { Link } from 'react-router-dom';
import './ColorsList.css';

function ColorsList({ colors, clickedColor, setClickedColor }) {
	return (
		<div className="ColorsList">
			<div
				className="ColorsList-heading"
				style={clickedColor ? { backgroundColor: clickedColor } : { backgroundColor: 'white' }}
			>
				<h1>Colors... what can't they do!?</h1>
				<Link to="/colors/new">Add to the rainbow???</Link>
			</div>
			<div className="ColorsList-colors">
				{colors.map((color, idx) => (
					<Link
						key={idx}
						onClick={() => setClickedColor(color)}
						to={`/colors/${color}`}
						className="ColorsList-color"
						style={{ backgroundColor: color }}
					>
						{color}
					</Link>
				))}
			</div>
		</div>
	);
}

export default ColorsList;
