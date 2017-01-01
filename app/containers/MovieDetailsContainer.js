import React from 'react';
import {singleSearch} from '../helpers/helpers';
import MovieDetailsComponent from '../components/MovieDetailsComponent';

var styles = {
	details: {
		color: "#ED6A5A"
	},
	mTitle: {
		color: '#ED6A5A',
		fontWeight: '700',
		textDecoration: "underline"
	}
}

const MovieDetailContainer = React.createClass({
    getInitialState(){
        return {
            loading: true,
            movieInfo: {}
        }
    },
    componentDidMount(){
        const {Title, Year} = this.props.data;
        this.getSingleMovie(Title, Year);
    },
    getSingleMovie(title, year){
        singleSearch(title, year)
            .then((data) => {
                this.setState({
                    loading: false,
                    movieInfo: data
                })
            })
    },
    render(){
        return (
            <MovieDetailsComponent
                movie = {this.props.data}
                loading = {this.state.loading}
                movieInfo = {this.state.movieInfo}
            />
        )
    }
})

export default MovieDetailContainer;