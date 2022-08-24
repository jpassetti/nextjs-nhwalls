import { useState, useEffect, useRef } from 'react'

import Moment from 'react-moment';
import moment from 'moment';


import Layout from './Layout'
import TitleFeed from './TitleFeed'

import PosterContent from './PosterContent'

import { getPosters } from '../lib/posters'

const Feed = ({type}) => {
	const [currentPoster, setCurrentPoster] = useState(null)
	const [activateInterval, setActivateInterval] = useState(false);
	const countRef = useRef(currentPoster);
	countRef.current = currentPoster;

	const totalPosters = 10;
	const slideDuration = 10000;

	const posters = getPosters()

	function isEven(number) {
		if (number % 2 == 0) {
			return true;
		} else {
			return false;
		}
	}

	useEffect(() => {
		//setScheduleMessage(`Executed. Counter value: ${counter}`);
		//console.log("timer changed", activateInterval);
		let interval;
		//console.log({ currentPoster });
		if (activateInterval) {
			interval = setInterval(() => {
				let currCount = countRef.current;
				//console.log('In setInterval', currCount);
				let newPosterIndex = currCount >= totalPosters - 1 ? 0 : currCount + 1;
				//console.log({newPosterIndex});
				setCurrentPoster(newPosterIndex);
				
			}, slideDuration);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [activateInterval]);

	useEffect(() => {
		const currentMinutes = moment().format("m");
		//console.log(currentMinutes);

		const currentSeconds = moment().format("s");
		//console.log("seconds string: ", currentSeconds);

		let first_digit, second_digit;

		first_digit = Math.floor(currentSeconds / 10);

		if (currentSeconds < 10) {
			// e.g. 9
			let digit_copy = first_digit;
			second_digit = digit_copy;
			first_digit = 0;
		} else {
			second_digit = Math.floor(currentSeconds % 10);
		}
		//console.log("first digit of seconds is ", first_digit);
		//console.log("timeout duration will be", second_digit);

		if (isEven(currentMinutes)) {
			// 10 total slides.  If even, add 5, so that it starts with 6,7,8,9,10.
			//console.log("EVEN MINUTE-- BOUNCE UP: current poster is first digit seconds plus five", first_digit+5);
			setCurrentPoster(first_digit+5);
		} else {
			//console.log("ODD MINUTE: current poster is first digit seconds", first_digit);
			setCurrentPoster(first_digit);
		}

		const timerId = schedule(second_digit);
		return () => clearTimeout(timerId);
	}, []);

	const schedule = (customDelay) => {
	//	console.log("schedule function");
	//	setScheduleMessage('Scheduled in 5s...');
		setActivateInterval(false);
		const timerId = setTimeout(() => {
			setActivateInterval(true);
		}, customDelay);

		return timerId;
	}

	return type === "poster" ? <div 
		style={{
			width: 2160,
			height: 3840,
			backgroundColor: "white",
		}}
		id={`poster${currentPoster}`}
	>
		{currentPoster !== null &&
			<Layout>
				<PosterContent data={posters[currentPoster]} />
			</Layout>
		}
	</div>
		: type === "title" ? <>
			{currentPoster !== null && <TitleFeed data={posters[currentPoster]} />}
		</>
	: ''
}
export default Feed
