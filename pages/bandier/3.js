import { useEffect } from 'react';

import Feed from '../../components/Feed'

const TV3 = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			location.reload();
		}, 60000);
		// clearing interval
		return () => clearInterval(timer);
	});
	return <BandierTitle />
}
export default TV3

