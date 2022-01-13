import { motion, AnimatePresence } from "framer-motion"

import Block from './Block'
import Color from './Color'
import Heading from './Heading'
import RotateScreen from './RotateScreen'

const TitleFeed = () => {
	//3840x1080

	const variants = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
		hidden: {
			opacity: 0,
			x: -200,
			transition: {
				when: "afterChildren",
			},
		},
	}

	return <div style={{
		width: 1080,
		height: 3840,
		backgroundColor: "white"
	}}>
		<Block type="screen" bgColor="blue">
			<RotateScreen>
				<motion.div
					animate="visible"
					initial="hidden"
					variants={variants}
				>
				<Heading name="h1" xl>
					<Color orange>Run the</Color><br />
					<Color white>show</Color>
				</Heading>
				</motion.div>
			</RotateScreen>
		</Block>
	</div>
}
export default TitleFeed

