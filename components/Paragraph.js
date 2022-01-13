import classNames from 'classnames/bind'

import styles from './paragraph.module.scss'

let cx = classNames.bind(styles)

const Paragraph = ({children, intro, blue, orange, white}) => {
	let paragraphClasses = cx({
		paragraph: true,
		intro: intro,
		blue: blue,
		orange: orange,
		white: white
	})
	return <p className={paragraphClasses}>{children}</p>
}
export default Paragraph;
