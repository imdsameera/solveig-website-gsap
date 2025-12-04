import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			// Use window.scrollY for modern browsers
			setScrollPosition(window.scrollY);
		};

		window.addEventListener('scroll', updatePosition);
		// Call once to set initial position
		updatePosition();

		// Cleanup the event listener on component unmount
		return () => window.removeEventListener('scroll', updatePosition);
	}, []);

	return scrollPosition;
};
