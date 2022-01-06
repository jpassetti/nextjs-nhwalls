import classNames from 'classnames/bind'

import styles from './tv.module.scss'

let cx = classNames.bind(styles)

/*
88” Ultra Stretch

3840x1080
32:9 aspect ratio
24.1” x 85”
 

86” Ultra Stretch

3840x2160
58:9 aspect ratio
14”x 85”
 

86” UHD

3840x2160
16:9
43.5” x 75.9”
*/

const TV = ({children, size}) => {
	let tvClasses = cx({
		tv: true,
		[`size-${size}`] : size
	})
	return <div className={tvClasses}>{children}</div>
}
export default TV
