import { motion, AnimatePresence } from "framer-motion"

import Image from 'next/image'

import Block from '../../../components/Block'
import Color from '../../../components/Color'
import Heading from '../../../components/Heading'
import RotateScreen from '../../../components/RotateScreen'

import styles from './photo.module.scss'

const PhotoGridTwo = () => {
	const variants = {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
	}

	return <div className={styles.photoContainer}>
		<div
			className={styles.photo}
			style={{
				backgroundImage: `url('/images/run-the-show.jpg')`
			}}
		/>
		<div
			className={styles.photo}
			style={{
				backgroundImage: `url('/images/create-and-innovate.jpg')`
			}}
		/>
		<div
			className={styles.photo}
			style={{
				backgroundImage: `url('/images/set-the-scene.jpg')`
			}}
		/>
	</div>
}
export default PhotoGridTwo;
