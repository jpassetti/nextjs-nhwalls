import styles from './controls.module.scss'

const Controls = ({children}) => {
	return <div className={styles.controls}>{children}</div>
}
export default Controls
