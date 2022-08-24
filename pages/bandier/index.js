import ButtonUI from '../../components/ButtonUI'
import ButtonGroup from '../../components/ButtonGroup'
import Container from '../../components/Container'
import TitleFeed from '../../components/TitleFeed'
import Frame from '../../components/Frame'
import { useState, useEffect } from 'react'

import { getPosters } from '../../lib/posters'

import Row from '../../components/Row'
import TV from '../../components/TV'
import Zoom from '../../components/Zoom'

const BandierDisplays = () => {
	const posters = getPosters()
	const [zoomLevel, setZoomLevel] = useState(.5)
	const [currentPosterIndex, setCurrentPosterIndex] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			if (currentPosterIndex >= posters.length - 1) {
				setCurrentPosterIndex(0);
			} else {
				setCurrentPosterIndex(currentPosterIndex + 1);
			}
		}, 15000);
		// clearing interval
		return () => clearInterval(timer);
	});

	return <div style={
		{
			width: "3000px",
			transition: `all .5s`,
			transformOrigin: "top left",
			transform: `scale(${zoomLevel})`
		}
	}>
		<ButtonGroup>
			Zoom:
			<ButtonUI label="50%" clickHandler={() => {
				setZoomLevel(0.5)
			}} />
			<ButtonUI label="100%" clickHandler={() => {
				setZoomLevel(1)
			}} />
			<ButtonUI label="Previous" clickHandler={() => {
				if (currentPosterIndex <= 0) {
					setCurrentPosterIndex(posters.length - 1);
				} else {
					setCurrentPosterIndex(currentPosterIndex - 1);
				}
			}} />
			<ButtonUI label="Next" clickHandler={() => {
				if (currentPosterIndex >= posters.length - 1) {
					setCurrentPosterIndex(0);
				} else {
					setCurrentPosterIndex(currentPosterIndex + 1);
				}
			}} />
		</ButtonGroup>
		<Row justifyContent="space-evenly" alignItems="center" mt="2">
			<TV size="32x9">
				<Zoom size="3.5">
					<Frame titleFeed src={`/bandier/title/`} />
				</Zoom>
			</TV>
			<TV size="16x9">
				<Zoom size="3.1">
					<Frame photoGrid src={`/bandier/photos/1`} />
				</Zoom>
			</TV>
			<TV size="32x9">
				<Zoom size="3.5">
					<Frame titleFeed src={`/bandier/title/`} />
				</Zoom>
			</TV>
			<TV size="16x9">
				<Zoom size="3.1">
					<Frame photoGrid src={`/bandier/photos/2`} />
				</Zoom>
			</TV>
			<TV size="32x9">
				<Zoom size="3.5">
					<Frame titleFeed src={`/bandier/title/`} />
				</Zoom>
			</TV>
		</Row>
	</div>
}
export default BandierDisplays
