import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 85vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
`

export const Titulo = styled.div`
    text-align: center;
    margin-bottom: 100px;
    margin-top: 20px;

`

export const Conteudo = styled.div`
    width: 600px;
    font-weight: 400;
    font-style: italic;
    text-align: justify;

    h2 {
        text-align: center;
        font-weight: 500;
        font-style: normal;
        text-decoration: underline;
        margin-bottom: 2rem;
    }
`