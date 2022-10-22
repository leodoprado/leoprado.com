import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerConteudo = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: white;

    h1 {
        font-size: 60px;
    }

    h4 {
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 10px;
    }

    h5 {
        font-weight: 400;
        font-style: italic;
        font-size: 18px;
    }
`