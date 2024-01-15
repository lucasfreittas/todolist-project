import { Container, Counter, List, EmptyList, FilledList } from './syles';
import  ClipboardIcon from '../../Assets/clipboard-icon.svg'

import { Task } from '../Task'

export function ListContainer(){

    function renderTaskList(){
        return(
            <FilledList>
                <Task />
            </FilledList>
            // <EmptyList>
            //     <img src={ClipboardIcon} alt="" />
            //     <div>
            //         <p>Você ainda não tem tarefas cadastradas</p>
            //         <span>Crie tarefas e organize seus itens a fazer</span>
            //     </div>
            // </EmptyList>
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
