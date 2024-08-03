import { Poiret_One, Raleway } from 'next/font/google'

export const poiret_one = Poiret_One({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poiret-one'
})

export const raleway = Raleway({
	weight: ['400', '100', '300', '700', '900', '500'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-raleway'
})