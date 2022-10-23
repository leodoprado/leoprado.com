import React from 'react'
import * as Sobre from "../../pages/sobre/style"
import Header from "../../components/header"
import Footer from '../../components/footer'

function index() {
    return (
        <>
            <Header/>
                <Sobre.Container>
                    <h1>Sobre mim</h1>
                </Sobre.Container>
            <Footer/>
        </>
    )
}

export default index