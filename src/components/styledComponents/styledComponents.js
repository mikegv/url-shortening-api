import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: hsl(180, 66%, 49%);
    
    border: none;
    color: white;
    font-weight: 600;
    
    
    ${props => props.size === 'large' ? 'padding: 15px 40px; font-size: 25px;border-radius: 50px;margin-top: 30px;' : 'padding: 12px 20px; font-size: 15px;border-radius: 25px;'}
    &:hover{
        cursor: pointer;
        background-color: hsl(180, 80%, 67%);
    }
`