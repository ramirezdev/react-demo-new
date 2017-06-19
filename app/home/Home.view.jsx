import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, fetchTweets, fetchNews } from '../../redux/actions/entities.js';
import { fetchBase } from '../../redux/actions/base.js';
import HeaderView from './Header.view.jsx';
import FeaturedWorkList from './Featured-work-list.view.jsx';
import NewsList from './Wire-news-list.view.jsx';

class HomeView extends Component {

	componentDidMount() {
		this.props.fetchBase(); //toDo move to a config pre render
		this.props.fetchPosts();
		this.props.fetchTweets();
		this.props.fetchNews();
	}

	render() {

		const { posts, postsFetching, tweets, tweetsFetching, news, newsFetching, base: { tagLine, menuItems, signature } } = this.props;

		return (
			<div className="app-wrapper">
				
				<HeaderView 
					menuItems={ menuItems }
					tweetsLoading={ tweetsFetching }
					tweets={ tweets }/>
				
				<div className="content-holder">
					<h2>{tagLine} <span className='sig'>{signature}</span></h2>
					<div className="feed-items-wrapper">
						<FeaturedWorkList
							collection={ posts }
							loading={ postsFetching }/>
						<NewsList
							collection={ news }
							loading={ newsFetching }/>
					</div>
				</div>


			</div>
		);
	}
}

function mapStateToProps ( state ) {
	const { entities: { posts, postsFetching, tweets, tweetsFetching, news, newsFetching }, base } = state;
	return {
		posts,
		postsFetching,
		tweets,
		tweetsFetching,
		news,
		newsFetching,
		base
	};
}

function mapDispatchToProps (dispatch) {
	return {
		fetchPosts: () => dispatch( fetchPosts() ),
		fetchTweets: () => dispatch( fetchTweets() ),
		fetchNews: () => dispatch( fetchNews() ),
		fetchBase: () => dispatch( fetchBase() )
 	};
}

HomeView.propTypes = {
	posts: PropTypes.arrayOf( PropTypes.object ).isRequired,
	postsFetching: PropTypes.bool.isRequired,
	tweets: PropTypes.arrayOf( PropTypes.object ).isRequired,
	tweetsFetching: PropTypes.bool.isRequired,
	news: PropTypes.arrayOf( PropTypes.object ).isRequired,
	newsFetching: PropTypes.bool.isRequired,
	base: PropTypes.shape( {
		tagLine: PropTypes.string,
		signature: PropTypes.string,
		menuItems: PropTypes.arrayOf( PropTypes.object ).isRequired
	} )
};

export default connect( mapStateToProps, mapDispatchToProps )( HomeView );