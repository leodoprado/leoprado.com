import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerHeader } from "./style"

function index() {
  return (
    <ContainerHeader>
            <nav>
              <Link to={'/'}>Perfil</Link>
              <Link to={'/sobre'}>Sobre</Link>
              <Link to={'/educacao'}>Educação</Link>
              <Link to={'/tecnologias'}>Tecnologias</Link>
              <Link to={'/projetos'}>Projetos</Link>
            </nav>
    </ContainerHeader>
  )
}

export default index