import classnames from 'classnames/bind'

import styles from './container.module.scss'

let cx = classnames.bind(styles)

import Div from './Div'

const Container = ({ children, content, verticalAlign, fullHeight, fullWidth, alignItems, flexDirection, justifyContent }) => {
	const containerClasses = cx({
		container: true,
		[`content`]: content,
		[`full-height`]: fullHeight,
		[`full-width`]: fullWidth,
		[`flex-direction-${flexDirection}`]: flexDirection,
		[`align-items-${alignItems}`]: alignItems,
		[`justify-content-${justifyContent}`]: justifyContent
	});
	return <div className={containerClasses}>{children}</div>
}
export default Container;
