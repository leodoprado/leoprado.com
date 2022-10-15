import styled from "styled-components";

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    color: #FFF;
    width: 100%;
    height: 30px;
    margin-bottom: 0.4rem;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;

    nav {
        display: flex;
    }

    a {
        color: #fff;
        text-decoration: none;
        margin-left: 2rem;
        margin-right: 2rem;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            margin-right: 0.5rem;
        }
    }

    a:hover, svg:hover{
        color: #C0FBFF;
    }
`