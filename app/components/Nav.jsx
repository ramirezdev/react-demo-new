import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import TweetBox from './tweetBox.jsx';

class Nav extends React.Component {

	render() {

		const { collection, tweets, tweetsLoading } = this.props;
		let menuItems = null;

		if ( collection && collection.length > 0 ) {
			menuItems = map( collection, ( model, i ) => {
				return ( <li key={ i }><a href={ model.route }>{ model.displayName }</a></li> );
			} );
		}

		return (
			<div className="navigation-wrapper">
				<div className="holder">
					<div className="elements">
						<div className="centered">
							<h1 className="logo"></h1>
							<ul>
								{ menuItems }
							</ul>
							<TweetBox collection={ tweets } loading={ tweetsLoading }/>
							<a href="#" className="mobile-menu-icon"></a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Nav.propTypes = {
	collection: PropTypes.arrayOf( PropTypes.object ).isRequired,
	tweets: PropTypes.arrayOf( PropTypes.object ).isRequired,
	tweetsLoading: PropTypes.bool.isRequired
};

export default Nav;
