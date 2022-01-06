import styles from './frame.module.scss'

const Frame = ({feed, size}) => {
	if (size === "16x9") {
		//3840x2160
		return <iframe className={styles.frame} width="2160" height="3840" src={`/feed/${feed}`} title="description goes here">
		</iframe>
	} else if (size === "32x9") {
		//3840x1080
		return <iframe className={styles.frame} width="1080" height="3840" src={`/feed/${feed}`} title="description goes here">
		</iframe>
	}
	
}
export default Frame
