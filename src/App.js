/* eslint-disable no-magic-numbers */
import { React } from 'react';
import './App.scss';

const displayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const App = () =>
	<div className="App">
		{ displayNumbers.map((element, index) =>
			<div key={ index }>{ element }</div>) }
		<div>123456789</div>
	</div>;

export default App;
