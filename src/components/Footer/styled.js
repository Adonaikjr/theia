import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 250px;
    background-color: ${({theme}) => theme.colors._red};
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.colors._white};

`
export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

a{
    text-decoration: none;
    color: ${({theme}) => theme.colors._white};
    
}
`

export const Section = styled.section`
display: flex;
gap: 12px;

p{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: solid 1px;
    border-radius: 100%;
    width: 30px;
    height: 30px;
}
`

export const BoxA = styled.div`
//border:solid;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
`

export const Text = styled.p`
height: 58px;
border-top: solid 1px;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`