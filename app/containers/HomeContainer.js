import React from 'react';
import HomeComponent from '../components/HomeComponent';
import {multiSearch} from '../helpers/helpers';

const HomeContainer = React.createClass({
	getInitialState(){
		return {
			search: false,
			movieTitle: ""
		}
	},
	handleUserSubmit(event){
		event.preventDefault();

		let movie = $(event.target).find("input:text").val();

		multiSearch(movie)
			.then((data) => {
				this.setState({
					search: true,
					movieTitle: movie,
					moviesFound: data
				})
			})
	},
	render(){
		console.log(this.state);
		return(
			<HomeComponent 
				data = {this.state}
				onUserSubmit = {this.handleUserSubmit}/>
		)
	}
})

export default HomeContainer;