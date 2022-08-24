import { motion, AnimatePresence } from "framer-motion"

import Image from 'next/image'

import Block from '../../../components/Block'
import Color from '../../../components/Color'
import Heading from '../../../components/Heading'
import RotateScreen from '../../../components/RotateScreen'

import styles from './photo.module.scss'

const PhotoGridOne = () => {
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
					backgroundImage: `url('/images/change-your-vantage-point.jpg')`
				}}
			/>
			<div
				className={styles.photo}
				style={{
					backgroundImage: `url('/images/gain-insider-access.jpg')`
				}}
			/>
			<div
				className={styles.photo}
				style={{
					backgroundImage: `url('/images/tell-stories-that-matter.jpg')`
				}}
			/>
	</div>
}
export default PhotoGridOne;
