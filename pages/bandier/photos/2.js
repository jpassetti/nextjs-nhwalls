import { motion, AnimatePresence } from "framer-motion"

import Image from 'next/image'

import Block from '../../../components/Block'
import Color from '../../../components/Color'
import Heading from '../../../components/Heading'
import RotateScreen from '../../../components/RotateScreen'

import styles from './photo.module.scss'

const BandierPhotosTwo = () => {
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
				backgroundImage: `url('/images/bandier/london-tower.jpg')`
			}}
		/>
		<div
			className={styles.photo}
			style={{
				backgroundImage: `url('/images/bandier/park.jpg')`
			}}
		/>
		<div
			className={styles.photo}
			style={{
				backgroundImage: `url('/images/bandier/reahl-rezak.jpg')`
			}}
		/>
	</div>
}
export default BandierPhotosTwo;
