import { Container } from './styles';
import  Todologo from '../../Assets/todo-logo.svg'

export function Header(){
    return(
        <Container>
            <img src={Todologo} alt="" />
        </Container>
    )
}