import { useEffect } from 'react';

import Feed from '../../components/Feed'
import BandierTitle from './title'

const TV1 = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			location.reload();
		}, 60000);
		// clearing interval
		return () => clearInterval(timer);
	});

	return <Feed type="title" />
}
export default TV1

