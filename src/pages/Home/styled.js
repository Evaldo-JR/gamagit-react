import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem 0 0 0.25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background-color: black;
    color: white;
    border-radius: 0 0.25rem 0.25rem 0;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }

    &:hover {
        background-color: coral;
        color: black;
        transition: 0.5s ease;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.75rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;
