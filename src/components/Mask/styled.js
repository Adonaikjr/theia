import styled from "styled-components"

export const Container = styled.div`
//border: solid;
height: 90vh;
display: flex;
`

export const Image1 = styled.image`

img{
    opacity: 0.1;
    height: 55rem;
}
`


export const BoxA = styled.div`
//border: solid;
position: absolute;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
height: 90vh;
align-items: center;

button{
    background: ${({theme}) => theme.colors._red};
    border: none;
    cursor: pointer;
    height: 4.43rem;
    width: 351px;
    border-radius: 11.56rem;
    font-family: ${({theme}) => theme.fonts._nunito};
font-size: 22px;
font-weight: 700;
line-height: 26px;
color: ${({theme}) => theme.colors._white};
margin-top: 108px;
}

`

export const Title = styled.h1`
margin-top: 323px;
font-family: ${({theme}) => theme.fonts._nunito};
font-size: 50px;
font-weight: 800;
line-height: 65px;
letter-spacing: 1px;
text-align: center;
width: 45rem;
color: ${({theme}) => theme.colors._white};



`
export const Text = styled.p`
color: ${({theme}) => theme.colors._white};
font-family: ${({theme}) => theme.fonts._nunito};
font-size: 30px;
font-weight: 400;
text-align: center;
margin-top:14px;
margin-left: 314px;
margin-right: 313px;
width: 100%;
`