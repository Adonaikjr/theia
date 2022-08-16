import { Container,Image1, BoxA, Title, Text} from "./styled"
import img2 from '../../assets/mask.svg'
import { Button } from "../Button"
export function Mask({title, text}){
    return(
        <Container>
            <Image1>
                <img src={img2} alt="circle" />
            </Image1>
            <BoxA>
               <Title> {title} </Title>
                <Text> {text} </Text>
                <Button title='Quero theia'/>
            </BoxA>
        </Container>
    )
}
            