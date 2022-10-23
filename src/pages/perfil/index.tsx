import React from 'react'
import { Container, ContainerConteudo } from './style'
import Header from '../../components/header'
import Footer from '../../components/footer'

const index = () => {
  return (
    <>
        <Header />
          <Container>
            <ContainerConteudo>
              <h1>Leonardo do Prado</h1>
              <h4>Web Developer - JavaScript | TypeScript | React | Node JS</h4>
              <h5>‘Always looking for the next level’</h5>
            </ContainerConteudo>
          </Container>
        <Footer />
    </>
  )
}

export default index