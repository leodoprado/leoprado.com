import React from 'react'
import { ContainerHeader } from "./style"

function index() {
  return (
    <ContainerHeader>
            <nav>
                <a href="/">Perfil</a>
                <a href="/sobre">Sobre</a>
                <a href="#">Educação</a>
                <a href="#">Tecnologias</a>
                <a href="#">Projetos</a>
            </nav>
    </ContainerHeader>
  )
}

export default index