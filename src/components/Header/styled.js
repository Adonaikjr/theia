import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: solid transparent;
  width: 100%;
  justify-content: space-around;
  position: absolute;
  color: ${({ theme }) => theme.colors._white};
  margin-top: 16px;
`

export const Text = styled.p`
  //border: solid;
  display: flex;
  align-items: center;
  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors._white};
    :hover {
      font-size: 110%;
    }
  }
`
export const Content = styled.div`
  //border: solid;
  display: flex;
  align-items: center;
  gap: 10px;

  > button {
    margin-left: 10px;
  }
`
export const Buttonlogin = styled.div`
  button {
    font-family: Nunito;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    background: transparent;
    border: solid 2px;
    cursor: pointer;
    color: white;
    height: 48px;
    width: 120px;
    border-radius: 100px;
  }
`
export const ButtonRegister = styled.div`
  button {
    font-family: Nunito;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    background: transparent;
    cursor: pointer;
    height: 48px;
    width: 120px;
    border: none;
    border-radius: 100px;
    background: ${({ theme }) => theme.colors._lightpurple};
  }
`
