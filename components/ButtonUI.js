import styles from './buttonui.module.scss'

const ButtonUI = ({label, clickHandler}) => {
	return <button className={styles.buttonui} onClick={clickHandler}>{label}</button>
}
export default ButtonUI;
