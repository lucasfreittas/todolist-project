import { Container, Counter, List, EmptyList, FilledList } from './styles';
import  ClipboardIcon from '../../Assets/clipboard-icon.svg'

import { Task } from '../Task'

interface ListContainerProps {
    taskDataBase: {
      id: number;
      text: string;
      status: string;
    }[];
    handleSwitchTaskStatus: (id: number) => void;
    onDeleteTask: any
  }

export function ListContainer({ taskDataBase, handleSwitchTaskStatus, onDeleteTask }: ListContainerProps){

    function renderTaskList(){
        if(taskDataBase.length > 0){
            return(    
                <FilledList>
                    {taskDataBase && (
                        taskDataBase.map(content => (
                            <Task 
                                key={content.id}
                                id={content.id}
                                content={content.text}
                                status={content.status}
                                handleSwitchTaskStatus={handleSwitchTaskStatus}
                                onDeleteTask={onDeleteTask}
                            />
                        ))
                    )}
                </FilledList>
                )
        } else {
            return(
                <EmptyList>
                    <img src={ClipboardIcon} alt="" />
                    <div>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </EmptyList>
            )
    }};

    function filterCompletedTasks(){
        return taskDataBase.filter(task => task.status === 'completed')
    };

    return(
        <Container>
            <Counter>
                <div className='createdTasks'>
                    <p>Tarefas Criadas</p>
                    <span>{taskDataBase.length}</span>
                </div>
                <div className='completedTasks'>
                    <p>Concluídas</p>
                    <span>{filterCompletedTasks().length} de {taskDataBase.length}</span>
                </div>
            </Counter>

            <List>
                {renderTaskList()}
            </List>
        </Container>
    )
}
