import React from 'react'
import { ContainerHeader } from "./style"

function index() {
  return (
    <ContainerHeader>
            <nav>
                <a href="/">Perfil</a>
                <a href="/sobre">Sobre</a>
                <a href="/educacao">Educação</a>
                <a href="/tecnologias">Tecnologias</a>
                <a href="/projetos">Projetos</a>
            </nav>
    </ContainerHeader>
  )
}

export default index