import { Container, Counter, List, EmptyList } from './syles';
import  ClipboardIcon from '../../Assets/clipboard-icon.svg'

export function Tasks(){

    function renderTaskList(){
        return(
            <EmptyList>
                <img src={ClipboardIcon} alt="" />
                <div>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </EmptyList>
        )
    }

    return(
        <Container>
            <Counter>
                <div className='createdTasks'>
                    <p>Tarefas Criadas</p>
                    <span>0</span>
                </div>
                <div className='completedTasks'>
                    <p>Concluídas</p>
                    <span>0</span>
                </div>
            </Counter>

            <List>
                {renderTaskList()}
            </List>
        </Container>
    )
};
