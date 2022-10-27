import styled from 'styled-components'

export const Container = styled.div`
  height: 98%;
  display: flex;
  border: solid transparent;
`

export const Image1 = styled.image`
  img {
    opacity: 0.1;
    height: 55rem;
  }
`

export const BoxA = styled.div`
  //border: solid;
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  border: solid transparent;

  button {
    background-color: ${({ theme }) => theme.colors._red};
    border: solid transparent;
    cursor: pointer;
    width: 351px;
    border-radius: 11.56rem;
    font-family: ${({ theme }) => theme.fonts._nunito};
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    color: ${({ theme }) => theme.colors._white};
    margin-top: 108px;
    height: 5rem;
  }
`

export const Title = styled.h1`
  margin-top: 323px;
  font-family: ${({ theme }) => theme.fonts._nunito};
  font-size: 50px;
  font-weight: 800;
  line-height: 65px;
  letter-spacing: 1px;
  text-align: center;
  width: 45rem;
  color: ${({ theme }) => theme.colors._white};
`
export const Text = styled.p`
  color: ${({ theme }) => theme.colors._white};
  font-family: ${({ theme }) => theme.fonts._nunito};
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  margin-top: 14px;
  margin-left: 314px;
  margin-right: 313px;
  width: 100%;
`
