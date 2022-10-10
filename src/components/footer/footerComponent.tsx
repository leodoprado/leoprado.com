import React from 'react'
import * as Footer from "./footerStyle"

function footerComponent() {
    return (
        <Footer.ContainerFooter>
            <nav>
                <a href="#">Gmail</a>
                <a href="#">GitHub</a>
                <a href="#">Linkedin</a>
                <a href="#">WhatsApp</a>
                <a href="#">Telegram</a>
            </nav>
        </Footer.ContainerFooter>
    )
}

export default footerComponent