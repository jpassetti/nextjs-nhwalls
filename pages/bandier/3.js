import { useEffect } from 'react'

import BandierTitle from './title'

const TV3 = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			location.reload();
		}, 600000);
		// clearing interval
		return () => clearInterval(timer);
	});

	return <BandierTitle />
}
export default TV3

