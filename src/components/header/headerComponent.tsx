import React from 'react'
import * as Header from './headerStyle'

function headerComponent() {
    return (
        <Header.ContainerHeader>
            <nav>
                <a href="#">Introduction</a>
                <a href="#">About me</a>
                <a href="#">Education</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
            </nav>
        </Header.ContainerHeader>
    )
}

export default headerComponent