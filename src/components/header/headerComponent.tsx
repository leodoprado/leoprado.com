import React from 'react'
import * as Header from './headerStyle'

function headerComponent() {
    return (
        <Header.ContainerHeader>
            <nav>
                <a href="#">Perfil</a>
                <a href="#">Sobre</a>
                <a href="#">Educação</a>
                <a href="#">Tecnologias</a>
                <a href="#">Projetos</a>
            </nav>
        </Header.ContainerHeader>
    )
}

export default headerComponent