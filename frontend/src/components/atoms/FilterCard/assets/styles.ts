import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 8px;
    background-color: gray;
    padding: 8px;
`;

export const PropertyContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 150px;
`;

export const PropertyStyledInput = styled.input`
    max-width: 36px;
    background-color: #282c34;
    color: white;
`;

export const PropertyStyledLabel = styled.label``;