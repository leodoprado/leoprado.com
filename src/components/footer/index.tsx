import React from 'react'
import * as Footer from "./style"
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

function footerComponent() {
    return (
        <Footer.ContainerFooter>
            <nav>
                <a href="https://github.com/leodoprado" target="_blank"><FaGithub />GitHub</a>
                <a href="https://www.linkedin.com/in/leodoprado/" target="_blank"><FaLinkedin />Linkedin</a>
                <a href="https://api.whatsapp.com/send?phone=5554999912440&text=Olá,%20tudo%20bem%20Leo?" target="_blank"><FaWhatsapp />WhatsApp</a>
                <a href="https://t.me/leodoprado" target="_blank"><FaTelegramPlane />Telegram</a>
            </nav>
        </Footer.ContainerFooter>
    )
}

export default footerComponent