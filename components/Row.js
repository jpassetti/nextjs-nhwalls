import classnames from 'classnames/bind'

import styles from './row.module.scss'

let cx = classnames.bind(styles)

export default function Row({
	attribs,
	name,
	children,
	justifyContent,
	flexDirection,
	alignItems,
	pt,
	pb,
	bt,
	mt,
	sticky,
	fullScreen,
	dataName,
	id
}) {

	const rowClasses = cx({
		row: true,
		[`justify-content-${justifyContent}`]: justifyContent,
		[`align-items-${alignItems}`] : alignItems,
		['pt2']: pt === "2",
		['pt1']: pt === "1",
		['pb2']: pb === "2",
		['pb1']: pb === "1",
		bt: bt,
		sticky: sticky,
		fullScreen: fullScreen,
		[`flex-direction-${flexDirection}`]: flexDirection,
		[`mt${mt}`] : mt
	})

	return (
		<div data-name={dataName} className={rowClasses} id={id}>
			{children}
		</div>
	)
}
