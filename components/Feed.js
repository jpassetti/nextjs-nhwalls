import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import ButtonUI from './ButtonUI'
import Controls from './Controls'
import Layout from './Layout'

import { getPosters } from '../lib/posters'
import PosterContent from './PosterContent'


const getPsuedoID = () => Math.floor(Math.random() * 1e15);

const Feed = ({poster=null, setPoster}) => {

	const posters = getPosters()

	const blockVariants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0,
				duration: 1,
				ease: "linear",
				//repeat: Infinity
			},
		},
		hidden: {
			opacity: 0,
			y: -100,
			transition: {
				delay: 0,
				duration: .75
			},
		},
	}
	return <div 
		style={{
		width: 2160,
		height: 3840,
		backgroundColor: "white",
		
	}}>
		{poster !== null &&
			<Layout>
				<Controls>
					<ButtonUI label="next" clickHandler={() => {
						console.log("clicked next");
						poster = poster > posters.length-1 ? 0 : poster++;
						setPoster(poster)
					}}></ButtonUI>
					<ButtonUI label="prev" clickHandler={() => {
						console.log("clicked prev");
						poster = poster < 0 ? posters.length-1 : poster--;
						setPoster(poster)
					}}></ButtonUI>
				</Controls>
				<PosterContent data={posters[poster]} />
			</Layout>
		}
	</div>
}
export default Feed
