import React from 'react';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(data=> {this.setState({robots:data})});
	}

	onSearchChange = (e) => {
		this.setState({searchfield: e.target.value});
	
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		if (this.state.robots.length === 0) {
			return <h1>Loading...</h1>
		} else {
		return (
			<div className="tc">
				<h1 className='f1'>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<ErrorBoundary>
					<Scroll>
						<Cardlist robots={filteredRobots} />
					</Scroll>
				</ErrorBoundary>
			</div>

		);
	}
	}	
	
}
export default App;