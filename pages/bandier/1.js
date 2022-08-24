import { useEffect } from 'react'

import BandierTitle from './title'

const TV1 = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			location.reload();
		}, 60000);
		// clearing interval
		return () => clearInterval(timer);
	});

	return <BandierTitle />
}
export default TV1

