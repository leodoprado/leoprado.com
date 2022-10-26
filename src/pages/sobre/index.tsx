import React from 'react'
import { Container, Conteudo } from "../../pages/sobre/style"
import Header from "../../components/header"
import Footer from '../../components/footer'

function index() {
    return (
        <>
            <Header/>
                <Container>
                    <Conteudo>
                    <h3>
                        Entusiasta da tecnologia, sempre instigado em aprender, buscar e compartilhar conhecimento e
                        informações do mundo da programação e afins, disposto a crescer profissionalmente e pessoalmente. Sem
                        prévia experiência no mercado da programação, busco alinhar projetos pessoais afim de desenvolver a
                        capacidade técnica e lógica, buscando qualificação e capacitação.
                    </h3> <br />
                    <h4>- Leonardo do Prado</h4>
                    </Conteudo>
                </Container>
            <Footer/>
        </>
    )
}

export default index