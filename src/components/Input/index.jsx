import { ContainerInput } from './styled'
export function Input({ title, children, ...rest }) {
  return (
    <ContainerInput {...rest}>
      <input {...rest} />
    </ContainerInput>
  )
}
