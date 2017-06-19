import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import classNames from 'classnames';
import TweetListItem from './TweetListItem.view.jsx';
import LoadingIndicator from './LoadingIndicator.jsx';

class TweetsListView extends React.Component {

	render() {

		const { collection, loading, enabled } = this.props;

		let tweets = null;

		if ( loading ) {
			return (
				<LoadingIndicator/>
			);
		}

		if ( collection && collection.length > 0 ) {
			tweets = map( collection, ( model, i ) => {
				return ( <TweetListItem
					key={ i }
					model={ model }/> );
			} );
		}

		let listClass = classNames('tweets-list', {
			enabled
		});

		return (
			<div className={ listClass }>
				<div className="wrapper">
					{ tweets }
				</div>
			</div>
		);
	}
}

TweetsListView.propTypes = {
	collection: PropTypes.arrayOf( PropTypes.object ).isRequired,
	loading: PropTypes.bool.isRequired,
	enabled: PropTypes.bool.isRequired
};

export default TweetsListView;