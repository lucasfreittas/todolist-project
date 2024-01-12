import { Container, Main, Form } from './styles';

import { PlusCircle } from "@phosphor-icons/react";

import { Header } from '../Components/Header';
import { Tasks } from '../Components/Tasks';

export function App() {


  return (
    <Container>
      <Header />
        <Main >
          <Form>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>Criar <PlusCircle size={16}/></button>
          </Form>

          <Tasks />
        </Main>
    </Container>
  )
}

