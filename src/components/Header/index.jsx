import { Button } from "../Button";
import { LogoPageHome } from "../Logos";

import { Container, Text, Content, ButtonRegister, Buttonlogin } from "./styled";
import logo1 from '../../assets/Logo.svg'
import { Link } from "react-router-dom";

export function Header(){
    return(
        <Container>
            <LogoPageHome logo={ <img src={ logo1 }/> } />
            <Text> <Link to='/empresa'> Para empresas </Link></Text>
            <Text>Para famílias</Text>
            <Text>Quem somos</Text>
            <Text>Conteúdo</Text>
            <Content>
               <Buttonlogin> <Button title='Entrar'/></Buttonlogin>
                <ButtonRegister><Button title='Cadastrar'/></ButtonRegister>
            </Content>
        </Container>
    )
}