import styled from 'styled-components'
import Select from 'react-select'

export const Button = styled.button`
    width: 100px;
    height:30px;
    background:lightblue;
    border: none;
    border-radius: 5px;

    &:hover{
        background-color:navy;
        color: white;
    }
`
export const Input = styled.input`
 width: 40%;
 height: 25px;
 border-radius: 5px;
 

`
export const Container = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    margin-top:10%;
    
 `
export const Background = styled.div`
    background-color: lightcyan;
    background-image: linear-gradient(-90deg,aqua,blue);
 `

export const StyledSelect = styled(Select)`
    width: 20%;
`

