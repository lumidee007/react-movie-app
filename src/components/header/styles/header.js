import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
    align-items: center;
    color: white;
    margin: 0;
    padding: 20px;
    font-weight: bold;
    box-shadow: 0 3px 6px 0 blue;
`

export const AppName = styled.div`
    display: flex;
    align-items: center;
`


export const SearchBox = styled.div`
    display: flex;
    background-color: white;
    padding: 5px;
    width: 40%;
    border-radius: 6px;
    padding-left: 10px;
    align-item: center;
    
`

export const InputBox = styled.input`
    border: none;
    outline: none;
    color: black;
    width: 100%;
    font-weight: bold;
    font-size: 23px;
    margin-left: 5px;

`