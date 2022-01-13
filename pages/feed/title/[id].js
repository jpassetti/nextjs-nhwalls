import { motion, AnimatePresence } from "framer-motion"

import Block from '../../../components/Block'
import Color from '../../../components/Color'
import Heading from '../../../components/Heading'
import RotateScreen from '../../../components/RotateScreen'

import { getPosters, getPosterBySlug } from '../../../lib/posters'

export async function getStaticPaths() {

	const posters = await getPosters()

	const paths = posters.map(poster => {
		const { slug } = poster
		console.log({slug});
		return {
			params: {
				id: slug,
			}
		}
	})
	return {
		paths,
		fallback: false,
	}
}
export async function getStaticProps({ params }) {
	const posters = await getPosters()
	//const posterData = await getPosterBySlug(params.id, posters)
	const posterData = posters.filter(poster => poster.slug === params.id);
	return {
		props: {
			posterData,
		}
	}

}



const TitleFeed = ({posterData}) => {
	const { orange, blue } = posterData[0].title;



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
						<Color orange>{orange}</Color><br />
						<Color white>{blue}</Color>
					</Heading>
				</motion.div>
			</RotateScreen>
		</Block>
	</div>
}
export default TitleFeed

