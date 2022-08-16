import { Link } from "react-router-dom";

import { Container, Content, Section, BoxA, Text } from "./styled";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { LogoPageHome } from "../Logos";
import logo1 from '../../assets/Logo.svg'

export function Footer(){
    return(
        <Container>
            <BoxA>
                <LogoPageHome logo={ <img src={logo1}/> }/>
                <Content>
                    <Link to='/'>Para Famílias</Link>
                    <Link to='/empresa'>Para Empresas</Link>
                </Content>
                <Content>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Conteúdo</Link>
                    <Link to='/'>Quem somos</Link>
                </Content>
                <Section>
                    <p><Link to='/'> <FaFacebookF color='white' /> </Link></p>
                    <p><Link to='/'> <FaTwitter color='white' /> </Link></p>
                    <p><Link to='/'> <FaInstagram color='white' /> </Link></p>
                </Section>
            </BoxA>
            <Text>Copyright 2019. All Rights Reserved.</Text>
        </Container>
    )
}