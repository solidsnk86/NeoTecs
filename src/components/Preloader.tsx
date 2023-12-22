import { useState, useEffect } from 'react'

export const Preloader = () => {
	const [preloaderVisible, setPreloaderVisible] = useState(true)
	useEffect(() => {
		const preloaderTimeout = setTimeout(() => {
			setPreloaderVisible(false)
		}, 2000)

		return () => clearTimeout(preloaderTimeout)
	}, [])

	return preloaderVisible && <div className='spinner inline mx-1'></div>
}
