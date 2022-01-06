import { useState, useEffect } from 'react'

import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'

import Block from './Block'
import Color from './Color'
import CTA from './CTA'
import Header from './Header'
import Heading from './Heading'
import Paragraph from './Paragraph'

import styles from './postercontent.module.scss'

const PosterContent = ({data}) => {
	const [introVisible, setIntroVisible] = useState(true)

	const {title, image, intro } = data;
	const {orange, blue} = title;

	useEffect(() => {
		const timer = setTimeout(() => {
			setIntroVisible(false)
		}, 3000);
	});

	const variants = {
		visible: i => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: 3 + (i * 0.2),
			},
			
		}),
		hidden: { 
			opacity: 0,
			x : -100
		},
	}
	const introVariants = {
		visible: {
			//opacity: 1,
			width: `${100}vw`,
			x: 0,
			transition: {
				duration: .5
			}
		},
		hidden: {
			//opacity: 0,
			width: 0,
			x: `${-100}vw`,
			transition: {
				delay: 3,
				duration: .5
			}
		},
	}

	return <>
		<AnimatePresence>
		{introVisible && 
		<motion.div
			className={styles.introScreen}
			initial="hidden"
			animate="visible"
			exit={{
				x: `${100}vh`
			}}
			variants={introVariants}
		>
			<Heading name="h1">
				<Color white>{orange}</Color><br />
				<Color blue>{blue}</Color>
			</Heading>
		</motion.div>
		}
		</AnimatePresence>
		<motion.div 
			custom={0}
			initial="hidden"
			animate="visible"
			variants={variants}
		>
			<Header>
				<Heading name="h1">	
					<Color orange>{orange}</Color><br />
					<Color blue>{blue}</Color>
			</Heading>
			</Header>
		</motion.div>
		<motion.div
			custom={1}
			initial="hidden"
			animate="visible"
			variants={variants}
		>
			<Block type="image">
				<Image
					src={`/images/${image}`}
					alt={`${orange} ${blue}`}
					width={5348}
					height={3566}
					layout="responsive"
				/>
			</Block>
		</motion.div>
		<motion.div
			custom={2}
			initial="hidden"
			animate="visible"
			variants={variants}
		>
			<Block type="intro">
				<Paragraph intro>
					{intro}
				</Paragraph>
			</Block>
		</motion.div>
		<motion.div
			custom={3}
			initial="hidden"
			animate="visible"
			variants={variants}
		>
			<Block type="cta">
				<CTA>What will you do at Newhouse?</CTA>
			</Block>
		</motion.div>
	</>
}
export default PosterContent
