import { useEffect } from 'react';

import Feed from '../../components/Feed'
import BandierPhotosTwo from '../bandier/photos/2'

const TV4 = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			location.reload();
		}, 60000);
		// clearing interval
		return () => clearInterval(timer);
	});
	
	//return <Feed type="poster" />
	return <BandierPhotosTwo />
}
export default TV4

