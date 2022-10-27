import styled from 'styled-components'
import background from '../../assets/background-grad.webp'
import backgroundfamily from '../../assets/family.webp'

export const Container = styled.div`
  width: 100%;
`
export const Justify = styled.div`
  //border: solid black;
  position: absolute;
  width: 100%;
  img {
    margin-left: -51%;
  }
`

export const Content = styled.div`
  height: 55rem;
`

export const BackgroundONE = styled.div`
  height: 55rem;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0px 0px 0px 5%;
  width: 100%;
  position: absolute;
  top: 0px;
`

export const BackgroundTWO = styled.div`
  background-image: url(${backgroundfamily});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0px 0px 0px 5%;
  opacity: 0.1;
  height: 55rem;
  width: 100%;
  border: none;
  position: absolute;
`

export const Title = styled.h1`
  margin-top: 138px;
  font-family: Nunito;
  font-size: 50px;
  width: 100%;
  text-align: center;
`

export const Text = styled.p`
  margin-top: 41px;
  font-family: Nunito;
  font-size: 22px;
  text-align: center;
  height: 71px;
`
export const Article = styled.article`
  margin: 0 auto;
  padding: 0 auto;
  height: auto;
  width: 1181px;
  //border: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    background: ${({ theme }) => theme.colors._red};
    border: none;
    cursor: pointer;
    height: 4.43rem;
    width: 351px;
    border-radius: 11.56rem;
    font-family: ${({ theme }) => theme.fonts._nunito};
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    color: ${({ theme }) => theme.colors._white};
    margin-top: 46.55px;
  }
`
export const Justifycard = styled.div`
  display: flex;
  // border: solid;
  justify-content: space-between;
`
export const Main = styled.main`
  //border: solid;
  margin-top: 153px;
  height: 795px;
  display: flex;
  margin-left: 187px;
  width: auto;
  background: ${({ theme }) => theme.colors._purple_1};
  img {
    height: 561px;
    width: 842px;
    margin-top: 23px;
    margin-left: -184px;
  }
`

export const BoxA = styled.div`
  height: auto;
  width: 100%;
  //border: solid red;
  margin-left: 111px;

  p {
    height: auto;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
  }
  h1 {
    margin: 0;
    padding: 0;
    height: auto;
    margin-top: 207px;
    margin-bottom: 61px;
    //border: solid;
  }
  button {
    background: ${({ theme }) => theme.colors._purple_1};
    border: 1px solid ${({ theme }) => theme.colors._red};
    cursor: pointer;
    height: 60px;
    width: 266px;

    border-radius: 11.56rem;
    font-family: ${({ theme }) => theme.fonts._nunito};
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    color: ${({ theme }) => theme.colors._red};
    margin-top: 46.55px;
  }
`

export const BoxB = styled.div`
  height: auto;
  width: 546px;
  //border: solid;
  margin-top: 61px;
  gap: 31px;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 32px;
  p {
    font-family: Nunito;
    font-size: 20px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
  }
`

export const Section = styled.section`
  margin-bottom: 139px;
  //   border: solid;
  width: 100%;
  height: auto;
  button {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors._red};
    cursor: pointer;
    height: 60px;
    width: 266px;

    border-radius: 11.56rem;
    font-family: ${({ theme }) => theme.fonts._nunito};
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    color: ${({ theme }) => theme.colors._red};
    margin-top: 86px;
  }
`

export const Justifytitle = styled.div`
  //  border: solid;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    > h1 {
      margin-top: 99px;
    }
  }
  img {
    height: 602px;
    width: 622px;
  }

  p {
    font-family: Nunito;
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: ${({ theme }) => theme.colors._text};
  }
`

export const BoxC = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  a {
    margin-top: 12px;
    color: ${({ theme }) => theme.colors._text};
    text-decoration: none;
    font-family: Nunito;
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
  }
  //border: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 144px;
`

export const BoxD = styled.div`
  width: 1016px;
  display: flex;
  justify-content: space-around;
  img {
    margin-top: 60px;
    height: 44px;
    width: 217px;
  }
`
