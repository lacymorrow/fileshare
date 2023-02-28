import React from "react";
import Head from 'next/head';
import { Container, Grid, Input, Spacer, Text, useInput } from "@nextui-org/react";
import Layout from 'components/Layout'
import LinkCard from 'components/LinkCard/linkCard'
import GradientTitle from 'components/GradientTitle/gradientTitle';
import TextCard from 'components/TextCard/textCard';

export default function Home() {
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
		<Layout>
			<Head>
				<title>🔒 Luminai Secure File Transfer</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<main>
				<Spacer y={4} />

				<Container lg>

					<GradientTitle />
					<br />
					<Text b>{`Securely upload files to share, or download files with a code.`}</Text>

					<Grid.Container gap={2} justify="center">
						<Grid xs={12} md={6}>
							<LinkCard
								faStyles='fas fa-file-upload'
								title='Share Files'
								body='Upload one or more files and receive a shareable link or code'
								link='/share'
								linkText='Share Files'
							/>
						</Grid>
						<Grid xs={12} md={6}>
							<LinkCard
								faStyles='fas fa-file-download'
								title='Download Files'
								body='Have a link or code? Retrieve the files that have been shared with you.'
								link='/download'
								linkText='Retrieve Files'
							/>
						</Grid>
					</Grid.Container>
				</Container>
				<Container lg>
					<TextCard
						title="Share text"
						body="Securely share text with like secrets, passwords, or other sensitive information."
						link='/message'
						faStyles='fas fa-paper-plane'
					/>

					<LinkCard
						title='Want receipt notifications and access to an old post?'
						body='Provide your email (optional)'
						link='/secure'
						linkText='Copy link to Clipboard'
						faStyles='fas fa-compass'
					/>

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
						label="Email (optional)"
					/>

				</Container>

			</main>

		</Layout>
	)
}
