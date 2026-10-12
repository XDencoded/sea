import { useMemo, useState } from 'react'

export const useWin = (size: number) => {
	const [isWin, setIsWin] = useState<boolean>(false)
	useMemo(() => {
		const handleResize = () => {
			if (window.innerWidth >= size) {
				setIsWin(true)
			} else {
				setIsWin(false)
			}
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return { isWin }
}
