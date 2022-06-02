import styled from 'styled-components'


export const StyledLink = styled.p`
    color: hsl(0, 1%, 66%);
    letter-spacing: 1px;
    margin-top: 15px;
    &:hover{
        color:hsl(180, 66%, 49%);
        cursor: pointer;
    }
`
export const StyledButton = styled.button`
    background-color: ${props => props.copied ? 'hsl(257, 27%, 26%)' : 'hsl(180, 66%, 49%)'};
    border: none;
    color: white;
    font-weight: 600;
    
    ${props => props.size === 'large' ? 'padding: 15px 30px; font-size: 25px;border-radius: 50px;margin-top: 30px;' : 'padding: 12px 20px; font-size: 15px;border-radius: 25px;'}
    
    &:hover{
        cursor: pointer;
        ${props => props.copied ? 'hsl(257, 27%, 26%)':'background-color: hsl(180, 80%, 67%);'
    }
`