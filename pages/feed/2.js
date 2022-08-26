import { useEffect } from 'react';

import Feed from '../../components/Feed'
import BandierPhotosOne from '../bandier/photos/1'

const TV2 = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			location.reload();
		}, 60000);
		// clearing interval
		return () => clearInterval(timer);
	});
	
	return <Feed type="poster" />
	//return <BandierPhotosOne />
}
export default TV2

