import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 20px 30px;
    border-bottom: .1px solid grey;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    margin: 0 auto;
    box-shadow: 0 3px 10px blue;

    @media (max-width: 800px) {
        display: grid;
        font-size: 10px;
    }
    
`

export const MovieImage = styled.img`
    height: 350px;
    object-fit: cover;
    background-size: cover;
    

    @media (max-width: 800px) {
        grid-column: 1 / span 2;
        grid-row: 1;
    }
`

export const MovieInfoColumn = styled.div`
display: flex;
flex-direction: column;
margin: 10px;

`

export const MovieInfoMain = styled.span`
    margin: 10px 0 20px 0;
    font-size: 22px;
    font-weight: bold;
    overflow: hidden;
    margin: 0.5px;
    padding: 0;
`


export const MovieInfoSpan = styled.span`
    margin: 10px 0 20px 0;
    font-weight: normal;
    font-size: 18px;
    word-wrap: break-word
    white-space: nowrap;
    opacity:0.8;
    margin-left: 5px;
    padding: 0;
`

export const Close = styled.span`

    height: fit-content;
    border-radius: 50%;
    font-size: 18px;
    margin-left: auto;
    cursor: pointer;
    color: red;
    padding: 0 2px;
    background: yellow;

    @media (max-width: 700px) {
        grid-column: 2 / span 3;
        padding left: 10px;
        grid-row: 1;
    }

    
`