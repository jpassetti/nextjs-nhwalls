import ButtonUI from '../components/ButtonUI'
import ButtonGroup from '../components/ButtonGroup'
import Container from '../components/Container'
import Frame from '../components/Frame'
import {useState} from 'react'

import Row from '../components/Row'
import TV from '../components/TV'
import Zoom from '../components/Zoom'

const Lobby = () => {
	const [zoomLevel, setZoomLevel] = useState(.5)

	return <div style={
		{ 
			width: "3000px",
			transition: `all .5s`,
			transformOrigin : "top left",
			transform: `scale(${zoomLevel})`
		}
	}>
		<ButtonGroup>
			Zoom:
			<ButtonUI label="50%" clickHandler={() => {
				setZoomLevel(0.5)
			}}/>
			<ButtonUI label="100%" clickHandler={() => {
				setZoomLevel(1)
			}} />
		</ButtonGroup>
		<Row justifyContent="space-evenly" alignItems="center" mt="2">
			<TV size="16x9">
				<Zoom size="3.1">
					<Frame feed="1" size="16x9" />
				</Zoom>
			</TV>
			<TV size="32x9">
				<Zoom size="3.5">
					<Frame feed="2" size="32x9" />
				</Zoom>
			</TV>
			<TV size="16x9">
				<Zoom size="3.1">
					<Frame feed="3" size="16x9" />
				</Zoom>
			</TV>
			<TV size="32x9">
				<Zoom size="3.5">
					<Frame feed="2" size="32x9" />
				</Zoom>
			</TV>
			<TV size="16x9">
				<Zoom size="3.1">
					<Frame feed="5" size="16x9" />
				</Zoom>
			</TV>
		</Row>
	</div>
}
export default Lobby
