import React from 'react';
import ImageGallery from 'react-image-gallery';

const Slideshow = () => {
	//todo move to entities in redux
	const images = [
		{
			original: 'img/slides/slide1.jpg'
		},
		{
			original: 'img/slides/slide2.jpg'
		},
		{
			original: 'img/slides/slide3.jpg'
		},
		{
			original: 'img/slides/slide4.jpg'
		}
	];

	return (
		<div className="slideshow-wrapper">
			<ImageGallery
				items={ images }
				slideInterval={ 2000 } />
		</div>
	);

};

export default Slideshow;
