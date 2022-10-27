import { Header } from '../../components/Header'
import {
  Container,
  BackgroundONE,
  BackgroundTWO,
  Justify,
  Content,
  Title,
  Text,
  Article,
  Justifycard,
  Main,
  BoxA,
  BoxB,
  Section,
  Justifytitle,
  BoxC,
  BoxD,
} from './styled'
import { Mask } from '../../components/Mask'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import imgcard1 from '../../assets/card1.svg'
import imgcard2 from '../../assets/card2.svg'
import imgcard3 from '../../assets/card3.png'
import eclip from '../../assets/eclip.webp'
import { BsCheck } from 'react-icons/bs'
import eclip2 from '../../assets/eclip2.webp'
import { Link } from 'react-router-dom'

import imgexame from '../../assets/exame.svg'
import startse from '../../assets/startse.svg'
import startup from '../../assets/startup.svg'
import { Footer } from '../../components/Footer'
import { LogoPageHome } from '../../components/Logos'
import logo1 from '../../assets/Logo.svg'
export function App() {
  return (
    <Container>
      <Content>
        <BackgroundONE />
        <BackgroundTWO />
        <Justify>
          <Mask
            title="A rede de apoio de mães e pais que trabalham"
            text="Equilibrar carreira e família era difícil. Até agora"
          />
        </Justify>
        <Header>
          <LogoPageHome logo={<img src={logo1} alt="logo" />} />
        </Header>
      </Content>

      <Article>
        <Title>
          O suporte e o cuidado que pais, mães e empresas precisavam.
        </Title>
        <Text>
          Ajudamos famílias e empresas a conciliar trabalho, filhos e tudo que
          existe entre um lado e o outro
        </Text>
        <Justifycard>
          <Card
            title={
              <Text>
                Especialistas disponíveis 24h por dia, 7 dias por semana
              </Text>
            }
            img={<img src={imgcard1} alt="card" />}
          />
          <Card
            title={
              <Text>
                Acesso remoto a médicos, psicólogos e muitos outros
                profissionais
              </Text>
            }
            img={<img src={imgcard2} alt="img" />}
          />
          <Card
            title={<Text>Conteúdo que facilita o dia-a-dia de verdade</Text>}
            img={<img src={imgcard3} alt="" />}
          />
        </Justifycard>
        <Button title="Quero conhecer" />
      </Article>

      <Main>
        <img src={eclip} alt="eclip" />
        <BoxA>
          <Title>Theia para sua empresa</Title>
          <BoxB>
            <Text>
              <BsCheck color="#E5495F" /> Atraia e retenha profissionais
              excelentes
            </Text>
            <Text>
              <BsCheck color="#E5495F" /> Reduza custos com planos de saúde
            </Text>
            <Text>
              <BsCheck color="#E5495F" /> Promova diversidade e inclusão
            </Text>
          </BoxB>
          <Button title="Quero conhecer" />
        </BoxA>
      </Main>
      <Section>
        <Justifytitle>
          <BoxA>
            <Title>Theia cuida de quem cuida</Title>
            <p>
              Mães e pais, sua família fica mais tranquila quando tem uma equipe
              para te dando apoio
            </p>
            <BoxB>
              <Text>
                <BsCheck color="#E5495F" /> Poupe seu tempo, dinheiro e desgaste
                emocional procurando profissionais para cada situação, nós já
                fizemos isso para você.
              </Text>
              <Text>
                <BsCheck color="#E5495F" /> Resolva suas dúvidas do dia-a-dia
                com nosso time de especialistas disponível 24 horas por dia
              </Text>
              <Text>
                <BsCheck color="#E5495F" /> Aprenda sem stress com nossos
                conteúdos. Eles são leves, diretos e feito por gente que sabe
                que maternidade e paternidade ideal não existe
              </Text>
            </BoxB>
            <Button title="Quero conhecer" />
          </BoxA>
          <img src={eclip2} alt="eclip2" />
        </Justifytitle>
      </Section>
      <BoxC>
        <Title>O que andam falando da Theia?</Title>
        <Link to="/">Ver na mídia</Link>
        <BoxD>
          <img src={imgexame} alt="exame" />
          <img src={startse} alt="strtse" />
          <img src={startup} alt="strtup" />
        </BoxD>
      </BoxC>
      <Footer />
    </Container>
  )
}
