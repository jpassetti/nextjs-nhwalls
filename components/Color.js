import classNames from 'classnames/bind'

import styles from './color.module.scss'

let cx = classNames.bind(styles)

const Color = ({children, orange=false, blue=false, white=false}) => {
	let spanClasses = cx({
		orange: orange,
		blue: blue,
		white: white
	})
	return <span className={spanClasses}>{children}</span>
}
export default Color
