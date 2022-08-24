import { useEffect } from 'react';

import Feed from '../../components/Feed'

const TV5 = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			location.reload();
		}, 60000);
		// clearing interval
		return () => clearInterval(timer);
	});
	return <Feed type="title" />
}
export default TV5

