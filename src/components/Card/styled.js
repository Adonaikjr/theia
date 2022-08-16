import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 456px;
    width: 372px;
    border-radius: 5px;
    margin-left: 32px;
    margin-top: 32px;
    //border: solid;
background: ${({theme}) => theme.colors._purple_1};
`
export const Title = styled.h2`
margin-top: 40px;
height: 105px;
width:  290px;
   
`

export const Text = styled.p`
`