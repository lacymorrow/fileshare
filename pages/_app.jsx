import { NextUIProvider } from '@nextui-org/react';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  return (
		<NextUIProvider>
			<Component {...pageProps} />
		</NextUIProvider>
		)
}
