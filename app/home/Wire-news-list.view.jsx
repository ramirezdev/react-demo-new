import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import WireNewsItem from '../components/WireNews.item.view.jsx';
import LoadingIndicator from '../components/LoadingIndicator.jsx';

class NewsList extends React.Component {

	render() {

		const { collection, loading } = this.props;
		let newsItems = null;

		if ( loading ) {
			return (
				<LoadingIndicator/>
			);
		}

		if ( collection && collection.length > 0 ) {
			newsItems = map( this.props.collection, ( model, i ) => {
				return ( <WireNewsItem
					key={ i }
					model={ model }/> );
			} );
		}
	    
		return (
			<section className="news-feed">
				<div className="section-label">	
					<h3>Wire</h3> <a href="#" className="view-all-link">View All News</a>
				</div>
				<div className="feed">
					{ newsItems }
				</div>
			</section>
		);
	}
}

NewsList.propTypes = {
	collection: PropTypes.arrayOf( PropTypes.object ).isRequired,
	loading: PropTypes.bool.isRequired
};

export default NewsList;