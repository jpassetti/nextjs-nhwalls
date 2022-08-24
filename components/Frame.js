import styles from './frame.module.scss'

const Frame = ({titleFeed, photoFeed, contentFeed, photoGrid, src}) => {
	if (titleFeed) {
		//3840x1080
		return <iframe className={styles.frame} width="1080" height="3840" src={src} title="description goes here">
		</iframe>
	} else if (photoFeed) {
		//3840x1080
		return <iframe className={styles.frame} width="2160" height="3840" src={src} title="description goes here">
		</iframe>
	} else if (contentFeed) {
		//3840x1080
		//console.log("content feeeeed");
		return <iframe className={styles.frame} width="2160" height="3840" src={src} title="description goes here">
		</iframe>
	} else if (photoGrid) {
		return <iframe className={styles.frame} width="2160" height="3840" src={src} title="description goes here">
		</iframe>
	}
}
export default Frame
