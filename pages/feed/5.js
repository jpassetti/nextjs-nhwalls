import { useEffect } from 'react'

import Feed from '../../../components/Feed'
import BandierTitle from '../../bandier/title'

const TV5 = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			location.reload();
		}, 60000);
		// clearing interval
		return () => clearInterval(timer);
	});
	return <BandierTitle />
}
export default TV5

