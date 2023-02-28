import Head from 'next/head'
import Layout from 'components/Layout'
import UploadBox from 'components/UploadBox/uploadBox'
import { Text } from '@nextui-org/react'

export default function Home() {
	return (
		<>
			<Layout>
				<Head>
					<title>Luminai Secure Upload</title>
					<link rel="icon" href="/favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>

				<main>
					<Text xl>Share Files</Text>
					<UploadBox />
				</main>

			</Layout>

			<style jsx>{`
          h1 {
            margin-top: 15vh;
          }
        `}</style>
		</>
	)
}

