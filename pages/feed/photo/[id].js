import { motion, AnimatePresence } from "framer-motion"

import Image from 'next/image'

import Block from '../../../components/Block'
import Color from '../../../components/Color'
import Heading from '../../../components/Heading'
import RotateScreen from '../../../components/RotateScreen'

import { getPosters, getPosterBySlug } from '../../../lib/posters'

import styles from './photo.module.scss'

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

const PhotoFeed = ({ posterData }) => {
	const variants = {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
	}

	return <div style={{
		width: 1080,
		height: 3840,
		backgroundColor: "white"
	}}>
		<Block type="photo" bgColor="blue" noPadding>
			<motion.div 
				className={styles.photoContainer}
				//initial="hidden"
				animate={{ 
					x: [0, ((5758-2160)* -1)],
					scale: [1, 1.1]
				}}
				transition={{ ease: "linear", duration: 12 }}
				//variants={variants}
			>
			<Image 
				className={styles.photoBg}
				src={`/images/${posterData[0].image}`}
				width={1600}
				height={1067}
					layout="responsive"
				alt={`${posterData[0].title.orange} ${posterData[0].title.blue}`}
			/>
			</motion.div>
		</Block>
	</div>
}
export default PhotoFeed

