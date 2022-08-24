import classNames from 'classnames/bind'

import styles from './heading.module.scss'

let cx = classNames.bind(styles)

const Heading = ({ attribs, name, children, type, color, mb, mt, textAlign, category, className, rotate, xl, cover, inside }) => {
	let headingClasses = cx({
		heading1: type === "h1" || name === "h1",
		heading2: type === "h2" || name === "h2",
		heading3: type === "h3" || name === "h3",
		heading4: type === "h4" || name === "h4",
		title: attribs && attribs[`data-component`] === "title",
		[`${color}`]: color,
		[`mb${mb}`]: mb,
		[`mt${mt}`]: mt,
		[`text-align-${textAlign}`]: textAlign,
		category: category,
		[`${className}`]: className,
		rotate: rotate,
		xl: xl,
		cover: cover,
		inside: inside
	});
	switch (name) {
		case "h1":
			return <h1 className={headingClasses}>{children}</h1>
			break;
		case "h2":
			return <h2 className={headingClasses}>{children}</h2>
			break;
		case "h3":
			return <h3 className={headingClasses}>{children}</h3>
			break;
		case "h4":
			return <h4 className={headingClasses}>{children}</h4>
			break;
		default:
			return <p>The heading type that you provided doesn't match the expected values.</p>
	}

}
export default Heading;
