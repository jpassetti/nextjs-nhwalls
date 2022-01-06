import classnames from 'classnames/bind'

import styles from './div.module.scss'

let cx = classnames.bind(styles)

import Row from './Row'
import Col from './Col'

const Div = ({
	attribs,
	children,
	className,
	color,
	fullScreen,
	height,
	id = false,
	name
}) => {
	const divClasses = cx({
		full_screen: fullScreen,
		[`${color}`]: color,
		[`height-${height}`]: height
	});

	if (attribs && attribs[`data-component`] === "row") {
		return <Row name={name}>{children}</Row>
	} else if (attribs && attribs[`data-component`] === "col") {
		return <Col name={name} attribs={attribs} className={attribs.className}>{children}</Col>
	} else if (fullScreen) {
		return <div id={id ? id : ''} name={name} className={divClasses}>{children}</div>
	} else {
		return <div id={id ? id : ''} name={name} className={className}>{children}</div>
	}

}
export default Div
