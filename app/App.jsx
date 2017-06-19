import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';
import HomeView from './home/Home.view.jsx';
import './app.scss';

const store = configureStore();

class App extends Component {

	render() {
		return (
			<Provider store={ store }>
				<HomeView/>
			</Provider>
		);
	}
}

export default App;