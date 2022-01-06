import classNames from 'classnames/bind'

import styles from './zoom.module.scss'

let cx = classNames.bind(styles)

const Zoom = ({size, children}) => {
	let zoomClasses = cx({
		zoom: true,
		//[`zoom-times-${size}`] : size
	})
	const scaleValue = size * 0.0625;
	return <div 
	className={zoomClasses} 
	style={
		{ 
			transform: `scale(${scaleValue })` 
		}
	}
	>{children}</div>
}
export default Zoom
