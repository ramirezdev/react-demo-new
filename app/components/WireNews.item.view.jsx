import React from 'react';
import moment from 'moment';

class WireNewsItemView extends React.Component {

	constructor( props ){
		super(props);
	}

	render() {
		const model = this.props.model;
		const date = moment( model.date ).format( 'MM/DD/YYYY' );
		return (
			<article className="wire-news-item-wrapper">
				<h3 className="title">{ model.title }</h3>
				<p className="date">{ date }</p>
				<a className="news-link" href={ '/news/' + model.id }>Read More</a>
			</article>
		);
	}
}

export default WireNewsItemView;