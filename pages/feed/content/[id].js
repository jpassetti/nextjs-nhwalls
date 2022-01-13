import { motion, AnimatePresence } from "framer-motion"

import Block from '../../../components/Block'
import Paragraph from '../../../components/Paragraph'

import { getPosters, getPosterBySlug } from '../../../lib/posters'

export async function getStaticPaths() {

	const posters = await getPosters()

	const paths = posters.map(poster => {
		const { slug } = poster
		console.log({ slug });
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

const ContentFeed = ({ posterData }) => {

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	const randomNumber = getRandomInt(3);

	const variants = {
		visible: {
			opacity: 1,
			y: 0
		},
		hidden: {
			opacity: 0,
			y: 300
		},
	}

	return <motion.div
		style={{
			width: 1080,
			height: 3840,
			backgroundColor: "white"
		}}
		initial="hidden"
		animate="visible"
		variants={variants}
	>
	{randomNumber === 0 ? <Block type="screen" bgColor="white">
			<Paragraph intro blue>{posterData[0].intro}</Paragraph>
		</Block>
	: randomNumber === 1 ? <Block type="screen" bgColor="orange">
			<Paragraph intro white>{posterData[0].intro}</Paragraph>
		</Block>
	: randomNumber === 2 ? <Block type="screen" bgColor="blue">
			<Paragraph intro white>{posterData[0].intro}</Paragraph>
		</Block>
	: ''
	}
	</motion.div>
}
export default ContentFeed
