import React from 'react'
import Footer from 'components/Footer/footer'
import { Container } from '@nextui-org/react'

function Layout({ children }) {
    return (
        <Container fluid>
            {children}
            <Footer />
		</Container>
    )
}

export default Layout
