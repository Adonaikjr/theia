import styled from 'styled-components'
import background from '../../assets/empres_mask1.svg'
export const ContainerEmpresa = styled.div`
  width: 100%;
`
export const ContainerMain = styled.main`
  border: solid transparent;
  margin-top: 5rem;
  padding-left: 9rem;
  background-image: url(${background});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 30rem;
`
export const Article = styled.article`
  h1 {
    font-family: Nunito;
    font-size: 50px;
    font-weight: 800;
    line-height: 65px;
    letter-spacing: 1px;
    text-align: left;
  }
  p {
    font-family: Nunito;
    font-size: 30px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 1px;
    text-align: left;
  }
  width: 57%;
  height: 100%;
  border: solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const NewContainerHeader = styled.header`
  border: solid transparent;

  p,
  a {
    color: ${({ theme }) => theme.colors._blue};
  }
`
export const Content = styled.section`
  border: solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const NewContainerInput = styled.section`
  width: 80%;
  border: solid transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  input {
    border: solid 1px ${({ theme }) => theme.colors._red};
    height: 3rem;
    border-radius: 185px;
  }
  button {
    cursor: pointer;

    border: solid transparent;
    height: 80%;
    padding: 5px;
    margin-left: -141px;
    border-radius: 182px;

    background-color: ${({ theme }) => theme.colors._red};
    color: ${({ theme }) => theme.colors._white};
  }
`

export const NewContent = styled(Content)`
  border: solid;
  flex-direction: column;
  section {
    display: flex;
  }
`

export const Card = styled.div`
  width: 264px;
  height: 178px;
`
