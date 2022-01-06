import classnames from 'classnames/bind'

import styles from './col.module.scss'

let cx = classnames.bind(styles)

export default function Col({
	attribs,
	children,
	color,
	xs,
	sm,
	md,
	lg,
	flexDirection,
	alignItems,
	justifyContent,
	textAlign,
	padding,
	className,
	alignments,
	badgeGridItem,
	sticky,
	dataName,
	paddingLeft,
	paddingRight,
	borderLeft,
	mt,
	mb
}) {
	const classList = className?.split(' ')

	// xs:text-align-left sm:text-align-right
	const alignmentsArr = attribs && attribs[`data-alignment`] ? attribs[`data-alignment`].split(" ") : alignments ? alignments.split(" ") : null;
	const alignmentsObj = {};
	alignmentsArr?.forEach(string => {
		const [key, value] = string.split(":");
		alignmentsObj[key] = value;
	});

	// ["xs:12", "sm:3"]
	const responsiveWidths = attribs && attribs[`data-responsive-widths`] ? attribs[`data-responsive-widths`].split(" ") : null;
	const responsiveObj = {};
	responsiveWidths?.forEach(string => {
		const [key, value] = string.split(":");
		responsiveObj[key] = value;
	});
	//console.log({ responsiveObj});

	const colClasses = cx({
		col: true,
		[`col-xs-${responsiveObj['xs']}`]: responsiveObj.hasOwnProperty('xs'),
		[`col-sm-${responsiveObj['sm']}`]: responsiveObj.hasOwnProperty('sm'),
		[`col-md-${responsiveObj['md']}`]: responsiveObj.hasOwnProperty('md'),
		[`col-lg-${responsiveObj['lg']}`]: responsiveObj.hasOwnProperty('lg'),
		[`col-xs-${xs}`]: xs,
		[`col-sm-${sm}`]: sm,
		[`col-md-${md}`]: md,
		[`col-lg-${lg}`]: lg,
		[`flex-direction-${flexDirection}`]: flexDirection,
		[`align-items-${alignItems}`]: alignItems,
		[`justify-content-${justifyContent}`]: justifyContent,
		[`text-align-${textAlign}`]: textAlign,
		[`padding-${padding}`]: padding,
		[`xs-${alignmentsObj['xs']}`]: alignmentsObj.hasOwnProperty('xs'),
		[`sm-${alignmentsObj['sm']}`]: alignmentsObj.hasOwnProperty('sm'),
		[`md-${alignmentsObj['md']}`]: alignmentsObj.hasOwnProperty('md'),
		[`lg-${alignmentsObj['lg']}`]: alignmentsObj.hasOwnProperty('lg'),
		white: color === "white",
		[`badge-grid-item`]: badgeGridItem,
		sticky: sticky,
		[`padding-left-${paddingLeft}`]: paddingLeft,
		[`padding-right-${paddingRight}`]: paddingRight,
		[`border-left`]: borderLeft,
		[`mt-${mt}`]: mt,
		[`mb-${mb}`]: mb
	})

	return (
		<div data-name={dataName} className={colClasses}>
			{children}
		</div>
	)
}
