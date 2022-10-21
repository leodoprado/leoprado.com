import React from 'react'
import Header from "../../components/header/headerComponent"
import Footer from "../../components/footer/footerComponent"
import * as Perfil from '../perfil/perfil'

const perfilPage = () => {
  return (
    <>
        <Header />
          <Perfil.ContainerPerfil>
          </Perfil.ContainerPerfil>
        <Footer />
    </>
  )
}

export default perfilPage