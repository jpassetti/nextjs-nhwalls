import Footer from "./Footer"

import styles from './layout.module.scss'

const Layout = ({children}) => {
	return <div className={styles.layout}>
		<div className={styles.layout_top}>
			{children}
		</div>
	</div>
}
export default Layout
