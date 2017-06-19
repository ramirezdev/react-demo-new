import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav.jsx';
import Slideshow from '../components/Slideshow.jsx';

class HeaderView extends React.Component {

	render() {

		const {menuItems, tweets, tweetsLoading } = this.props;

		return (
			<header>
				<Nav 
					collection={ menuItems }
					tweets={ tweets }
					tweetsLoading={ tweetsLoading }/>
				<Slideshow/>
			</header>
		);
	}
}

HeaderView.propTypes = {
	menuItems: PropTypes.arrayOf( PropTypes.object ).isRequired,
	//slides: PropTypes.arrayOf( PropTypes.object ).isRequired,
	tweets: PropTypes.arrayOf( PropTypes.object ).isRequired,
	tweetsLoading: PropTypes.bool.isRequired
};

export default HeaderView;