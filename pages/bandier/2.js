import { useEffect } from 'react';

import Feed from '../../components/Feed'
import BandierPhotosOne from './photos/1'

const TV2 = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			location.reload();
		}, 60000);
		// clearing interval
		return () => clearInterval(timer);
	});
	return <BandierPhotosOne />
}
export default TV2

