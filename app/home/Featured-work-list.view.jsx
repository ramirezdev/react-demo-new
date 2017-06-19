import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import FeaturedWorkItem from '../components/FeaturedWork.item.view.jsx';
import LoadingIndicator from '../components/LoadingIndicator.jsx';

class FeaturedWorkList extends React.Component {

	render() {
		const { collection, loading } = this.props;
		let featuredItems = null;

		if ( loading ) {
			return (
				<LoadingIndicator/>
			);
		}

		if ( collection && collection.length > 0 ) {

			featuredItems = map( collection, ( model, i ) => {
				return ( <FeaturedWorkItem
					key={ i }
					model={ model }/> );
			} );
		}

		return (
			<section className="featured-work-feed">
				<div className="section-label">	
					<h3>Featured Work</h3> <a href="#" className="view-all-link">View All Work</a>
				</div>
				<div className="feed">
					{ featuredItems }
				</div>
			</section>
		);
	}
}

FeaturedWorkList.propTypes = {
	collection: PropTypes.arrayOf( PropTypes.object ).isRequired,
	loading: PropTypes.bool.isRequired
};

export default FeaturedWorkList;
