import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100vw;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #C0FBFF;

    nav {
        display: flex;
    }
    
    a {
        font-size: 15px;
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 500;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        padding: 13px;
        border-radius: 10px;
        transition-duration: 0.5s;
    }

    a:hover{
        background: #4a4a4a;
        color: #C0FBFF;
    }
`