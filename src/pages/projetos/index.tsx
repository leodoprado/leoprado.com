import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Container } from './style'

function index() {
  return (
    <>
        <Header/>
            <Container>
                <h1>Projetos</h1>
            </Container>
        <Footer/>
    </>
  )
}

export default index