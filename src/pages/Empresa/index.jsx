import { Header } from '../../components/Header'
import { LogoPageHome } from '../../components/Logos'
import {
  ContainerEmpresa,
  ContainerMain,
  NewContainerHeader,
  Content,
  NewContainerInput,
  Article,
  Card,
  NewContent,
} from './styled'
import logoEmpresa from '../../assets/logoE.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useState } from 'react'

export function Empresa() {
  const [click, setClick] = useState(false)

  function handleClick() {
    setClick()
  }

  return (
    <ContainerEmpresa>
      <NewContainerHeader>
        <Header>
          <LogoPageHome logo={<img src={logoEmpresa} alt="logoEmpresa" />} />
        </Header>
      </NewContainerHeader>
      <Content>
        <ContainerMain>
          <Article>
            <h1>O benefício corporativo que aproxima famílias e empresas</h1>{' '}
            <p>
              Feito para empresas que querem atrair e reter mães e pais,
              aumentar produtividade e engajamento, e promover qualidade de vida
              e diversidade
            </p>
            <NewContainerInput>
              <Input placeholder="Seu e-mail" />
              <Button title="Quero experimentar" />
            </NewContainerInput>
          </Article>
        </ContainerMain>
      </Content>

      <NewContent>
        <Article>
          <h1>Ofereça suporte que mães e pais precisam</h1>
        </Article>
        <section>
          <Card>
            <h2>disponivel 24 horas por dia </h2>
            <p>
              disponivel 24horas por dia para resolver duvidas e todo tipo de
              problema a qualqer hora do sia ou da noite
            </p>

            <Button title="click aqui" value={click} onClick={handleClick} />
          </Card>
          <Card>
            <h2>disponivel 24 horas por dia </h2>
            <p>
              disponivel 24horas por dia para resolver duvidas e todo tipo de
              problema a qualqer hora do sia ou da noite
            </p>
          </Card>
          <Card>
            <h2>disponivel 24 horas por dia </h2>
            <p>
              disponivel 24horas por dia para resolver duvidas e todo tipo de
              problema a qualqer hora do sia ou da noite
            </p>
          </Card>
          <Card>
            <h2>disponivel 24 horas por dia </h2>
            <p>
              disponivel 24horas por dia para resolver duvidas e todo tipo de
              problema a qualqer hora do sia ou da noite
            </p>
          </Card>
        </section>
      </NewContent>
    </ContainerEmpresa>
  )
}
