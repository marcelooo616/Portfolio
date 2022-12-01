import styled, { css } from "styled-components";

export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    border-radius: 00px 0px 10px 10px;
    width: 100%;
    height: 300px;
    top:70px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;

    background: rgba(17,18,17,0.95);
    background: linear-gradient(34deg, rgba(25,88,24,0.95) 0%, rgba(17,18,17,8.95) 95%);

    opacity: 0;
    pointer-events: none;
    transition: 1s ease-in-out

    >svg{
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;

    ` }




`;