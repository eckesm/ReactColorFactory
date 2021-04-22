import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import useLocalStorageState from './hooks/useLocalStorageState';
import ColorsList from './ColorsList';
import Color from './Color';
import AddColor from './AddColor';

const Routes = () => {
	const initialState = [ 'red', 'orange', 'yellow', 'green', 'blue', 'violet' ];
	const [ myColors, setMyColors ] = useLocalStorageState('myColors', initialState);
	const [ clickedColor, setClickedColor ] = useLocalStorageState('lastClickedColor', '');
	const addColor = newColor => {
		setMyColors([ ...myColors, newColor ]);
		setClickedColor(newColor);
	};

	return (
		<Switch>
			<Route exact path="/colors">
				<ColorsList colors={myColors.sort()} clickedColor={clickedColor} setClickedColor={setClickedColor} />
			</Route>
			<Route exact path="/colors/new">
				<AddColor addColor={addColor} setClickedColor={setClickedColor} />
			</Route>
			<Route exact path="/colors/:name">
				<Color colors={myColors} />
			</Route>
			<Redirect to="/colors" />
		</Switch>
	);
};

export default Routes;
