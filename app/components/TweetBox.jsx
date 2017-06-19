import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TweetsList from './TweetsList.view.jsx';

class TweetBox extends React.Component {

	constructor( props ){
		super(props);
		this.state = { feedOpen: false };
		this.openFeed = this.openFeed.bind( this );
	}

	openFeed( e ) {
		e.preventDefault();
		this.setState( {
			feedOpen: !this.state.feedOpen
		} );
	}

	render() {

		const { collection, loading } = this.props;

		let feedClasses = classNames(
			'twitter-feed-holder',
			{
				'enabled': this.state.feedOpen
			});
		let toggleClasses = classNames(
			'toggle-link',
			{
				'enabled': this.state.feedOpen
			});


		return (

			<div className="tweet-box">
				<div className="inner-holder">
					<div className={ feedClasses }>
						<span className="tweet-logo"></span> <span className="label">Tweet Tweet</span>
					</div>
					<a href="#" onClick={ this.openFeed } className={ toggleClasses }></a> 
				</div>
				<TweetsList 
					enabled={ this.state.feedOpen }
					collection={ collection }
					loading={ loading }/>
			</div>
		);
	}
}

TweetBox.propTypes = {
	collection: PropTypes.arrayOf( PropTypes.object ).isRequired,
	loading: PropTypes.bool.isRequired
};

export default TweetBox;