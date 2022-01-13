import classNames from 'classnames/bind'

import styles from './block.module.scss'

let cx = classNames.bind(styles)

const Block = ({children, type, bgColor, noPadding}) => {
	let blockClasses = cx({
		block: type !== "image",
		intro: type === "intro",
		cta : type === "cta",
		screen: type === "screen",
		photo: type === "photo",
		[`bgColor-${bgColor}`] : bgColor,
		noPadding: noPadding
	})
	return <div className={blockClasses}>{children}</div>
}
export default Block
