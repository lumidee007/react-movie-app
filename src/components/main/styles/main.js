import styled from "styled-components";


export const MovieMain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    width: 280px;
    object-fit: cover;
    box-shadow: 0 3px 10px blue;
    cursor: pointer;
`

export const MovieImage = styled.img`
    height: 362px;
    object-fit: cover;
`
export const MovieName = styled.span`
    margin: 10px 0 20px 0;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    opacity:0.8;
`

export const MovieText = styled.span`
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0;
    
    margin-bottom: 0;
`

export const MovieInfo = styled.div`
padding: 0;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    opacity:0.8;
`