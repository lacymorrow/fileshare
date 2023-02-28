import React from 'react'
import Link from 'next/link'
import { Text } from '@nextui-org/react'

function GradientTitle(props) {
	return (
		<>
			<Text
				h1
				size={60}
				css={{
					display: 'inline-block',
					textGradient: "45deg, $blue600 -20%, $pink600 50%",
				}}
				weight="bold"
			>
				Luminai{' '}
			</Text>
			<Text
				h1
				size={60}
				css={{
					display: 'inline-block',
					textGradient: "45deg, $purple600 -20%, $pink600 100%",
				}}
				weight="bold"
			>
				Secure{' '}
			</Text>
			<Text
				h1
				size={60}
				css={{
					display: 'inline-block',
					textGradient: "45deg, $yellow600 -20%, $red600 100%",
				}}
				weight="bold"
			>
				File Transfer
			</Text>

		</>
	)
}

export default GradientTitle
