import styled from 'styled-components';

export const Button = styled.button`
    outline: none;
    cursor: pointer;
    margin-left: 10px;
    padding: 10px;
    width: 150px;
    
    background: lightblue;
    border: 1px solid lightblue;
    border-radius: 5px;

    &:hover {
        background: blue;
        color: white;
    }
`;
