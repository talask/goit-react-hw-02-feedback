import styled from 'styled-components';

export const Table = styled.table`
    width: 70%;
    font-size : 20px;
    text-align: left;
    background-color: white;
    margin: 0 auto;

    tbody tr:nth-child(even) {
        background-color: #efefef;
    }
    
    td {
        padding: 5px;
        margin-top: 10px;
    }
`;