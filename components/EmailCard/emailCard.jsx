import React from 'react'
import Link from 'next/link'
import styles from './emailCard.module.scss'
import { Input, Text, useInput } from '@nextui-org/react'


function EmailCard(props) {
	const { value, reset, bindings } = useInput("");

	const validateEmail = (value) => {
		return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
	};

	const helper = React.useMemo(() => {
		if (!value)
			return {
				text: "",
				color: "",
			};
		const isValid = validateEmail(value);
		return {
			text: isValid ? "Correct email" : "Enter a valid email",
			color: isValid ? "success" : "error",
		};
	}, [value]);
	return (
		<div className={styles.emailCard}>
			<i className={props.faStyles} />
			<h1>{props.title}</h1>
			<Input
				{...bindings}
				clearable
				shadow={false}
				onClearClick={reset}
				status={helper.color}
				color={helper.color}
				helperColor={helper.color}
				helperText={helper.text}
				type="email"
				label="Provide your email (optional)"
				size="xl"
			/>

			<br />

			<Link href={props.link}>
				<a className='button'>{props.linkText}</a>
			</Link>
		</div>
	)
}

export default EmailCard
