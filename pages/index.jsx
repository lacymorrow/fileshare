import React from "react";
import Head from 'next/head';
import { Container, Grid, Spacer, Text } from "@nextui-org/react";
import Layout from 'components/Layout'
import LinkCard from 'components/LinkCard/linkCard'
import GradientTitle from 'components/GradientTitle/gradientTitle';
import TextCard from 'components/TextCard/textCard';
import EmailCard from "components/EmailCard/emailCard";

export default function Home() {
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

					<EmailCard
						title='Want receipt notifications and access to an old post?'
						body='Provide your email (optional)'
						link='/secure'
						linkText='Copy link to Clipboard'
						faStyles='fas fa-compass'
					/>
				</Container>

			</main>

		</Layout>
	)
}
