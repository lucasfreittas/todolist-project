import { Container, Main, Form } from './styles';

import { PlusCircle } from "@phosphor-icons/react";

import { Header } from '../Components/Header';
import { ListContainer } from '../Components/ListContainer';
import { useState } from 'react';

export function App() {

  const [taskDataBase, setTaskDataBase] = useState([
    {id: 1, text: 'Planejar viagem para o Chile', status: 'completed'},
    {id: 2, text: 'Reservar as passagens', status: 'opened'},
]);
 
  const [inputValue, setInputValue] = useState('')

  function handleSwitchTaskStatus(id: number){
    setTaskDataBase(prevTasks => {
        return prevTasks.map(task => {
            if(task.id === id){
                const newStatus = task.status === 'completed' ? 'opened' : 'completed';
                return {...task, status: newStatus};
            }
            return task;
        })
    })
  };

  function handleInputValue(event: any){
    setInputValue(event.target.value)
  };

  function handleNewTask(event: any){
    event.preventDefault()
    const newTask = {
      id: Math.max(...taskDataBase.map(task => task.id), 0) + 1,
      text: inputValue,
      status: 'opened'
    };

    setTaskDataBase(prevTasks => [...prevTasks, newTask]);
  
  };

  function deleteTask(taskToDelete: number){
    setTaskDataBase(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskToDelete);

      return updatedTasks
    })
  
  };


  return (
    <Container>
      <Header />
        <Main >
          <Form onSubmit={handleNewTask}>
            <input 
              type="text" 
              placeholder='Adicione uma nova tarefa'
              onChange={handleInputValue}
            />
            <button>Criar <PlusCircle size={16}/></button>
          </Form>

          <ListContainer 
            taskDataBase={taskDataBase} 
            handleSwitchTaskStatus={handleSwitchTaskStatus}
            onDeleteTask={deleteTask}
          />
        </Main>
    </Container>
  )
}

