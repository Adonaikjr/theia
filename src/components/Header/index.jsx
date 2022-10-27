import { Button } from '../Button'
import { Container, Text, Content, ButtonRegister, Buttonlogin } from './styled'
import { Link } from 'react-router-dom'

export function Header({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
      <Text>
        {' '}
        <Link to="/empresa"> Para empresas </Link>
      </Text>
      <Text>Para famílias</Text>
      <Text>Quem somos</Text>
      <Text>Conteúdo</Text>
      <Content>
        <Buttonlogin>
          {' '}
          <Button title="Entrar" />
        </Buttonlogin>
        <ButtonRegister>
          <Button title="Cadastrar" />
        </ButtonRegister>
      </Content>
    </Container>
  )
}
