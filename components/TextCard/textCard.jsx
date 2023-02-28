import React from 'react'
import Link from 'next/link'
import styles from '../LinkCard/linkCard.module.scss'
import { Spacer, Text, Textarea } from '@nextui-org/react'

function TextCard(props) {
	return (
		<div className={styles.linkCard}>
			<i className={props.faStyles} />
			<h1>{props.title}</h1>
			<Text size="$xl">{props.body}</Text>

			<Spacer y={2} />

			<Textarea css={{ width: '100%' }} bordered minRows={4} maxRows={80} labelPlaceholder="Write your sensitive information here." />
		</div>
	)
}

export default TextCard
