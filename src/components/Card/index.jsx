import { Container, Title, Text } from './styled'

export function Card({ title, text, img }) {
  return (
    <Container>
      <Title>{title}</Title>
      {img}
      <Text>{text}</Text>
    </Container>
  )
}
