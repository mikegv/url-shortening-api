import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: hsl(180, 66%, 49%);
    padding: 12px 20px;
    border-radius: 25px;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 15px;

    &:hover{
        cursor: pointer;
        background-color: hsl(180, 80%, 67%);
    }
`