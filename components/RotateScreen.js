import styles from './rotatescreen.module.scss'

const RotateScreen = ({children}) => {
	return <div className={styles.rotated}>{children}</div>
}
export default RotateScreen;
