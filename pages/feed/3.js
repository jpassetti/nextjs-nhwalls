import { useState, useEffect } from 'react'
import Feed from '../../components/Feed'

const Feed3 = () => {
	const [currentPoster, setCurrentPoster] = useState(1)

	/*useEffect(() => {
		//console.log("use effect");
		console.log({ currentPoster });
		const timer = setInterval(() => {
			//console.log("timer");
			currentPoster < 10 ? setCurrentPoster(currentPoster++) : setCurrentPoster(0);
		}, 10000);
	});*/

	return <Feed poster={currentPoster} setPoster={setCurrentPoster} />
}
export default Feed3

