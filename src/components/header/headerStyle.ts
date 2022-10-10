import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Ubuntu', sans-serif;
    box-shadow: 0px 0px 8px gray;

    nav {
        display: flex;
    }
    
    a {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 500;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        transition-duration: 0.3s;
    }

    a:hover {
        color: #8f9ba8;
    }
`