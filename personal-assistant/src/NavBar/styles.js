import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100vw; 
    height: 20%; 
    background-color: blue;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: row;

`

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
    padding: 20px;

    &:hover{
        color: orange;
    }
`
export const Box = styled.div`
    color: white;
    padding: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border: 3px solid 
    border-radius: 5px;
    &:hover{
        color: orange;
    }
`
