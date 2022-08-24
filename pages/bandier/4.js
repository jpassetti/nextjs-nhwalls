import { useEffect } from 'react';

import BandierPhotosTwo from './photos/2'

const TV4 = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			location.reload();
		}, 60000);
		// clearing interval
		return () => clearInterval(timer);
	});
	return <BandierPhotosTwo />
}
export default TV4

