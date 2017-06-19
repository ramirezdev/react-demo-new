import React from 'react';
import PropTypes from 'prop-types';

const TweetListItem = ( props ) => {

	const { model:{ date, content } } = props;
	//todo use es6 template strings
	return (
		<div className="tweet">
			<div className="tweet-content" dangerouslySetInnerHTML={ { __html: content } }></div>
			<p className="modified">{ date }</p>
		</div>
	);

};

TweetListItem.propTypes = {
	model: PropTypes.shape( {
		date: PropTypes.string,
		content: PropTypes.string
	} )
};

export default TweetListItem;
