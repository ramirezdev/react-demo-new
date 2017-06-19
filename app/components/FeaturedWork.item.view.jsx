import React from 'react';
import PropTypes from 'prop-types';

const FeaturedWorkItemView = ( props ) => {

	const { model:{ id, icon, client, title, subtitle, desc } } = props;

	return (
		<article className="featured-work-item">
			<img className="icon" src={ icon }/>
			<span className="client-name">{ client }</span>
			<span className="project-title">{ title }</span>
			<p className="project-desc">{ desc }</p>
			<a href={ 'featured-work/' + id } className="project-link">View Project</a>
		</article>
	);

};

FeaturedWorkItemView.propTypes = {
	model: PropTypes.shape( {
		id: PropTypes.string,
		icon: PropTypes.string,
		client: PropTypes.string,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		desc: PropTypes.string
	} )
};

export default FeaturedWorkItemView;
