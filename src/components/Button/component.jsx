import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${(props) => props.theme.colors.black[1]};
    transition: 4s background-color;
    &:hover {
        background-color: ${(props) => props.theme.colors.black[10]};
    }
`
