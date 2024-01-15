import { useState } from 'react';
import { Container } from './styles';
import { Trash, Circle, CheckCircle, Check } from "@phosphor-icons/react";

interface TaskProps {
    id: number,
    content: string,
    handleSwitchTaskStatus: any,
    status: string,
    onDeleteTask: any
}

export function Task({ content, handleSwitchTaskStatus, id, status,  onDeleteTask }: TaskProps){
    const [taskComplete, setTaskComplete] = useState(false)

    function handleCheckbox(event: any){
        setTaskComplete(event.target.checked)
        handleSwitchTaskStatus(id)
    };

    function handleDeleteTask(){
        onDeleteTask(id)
    }

    function switchClass(){
        if(status === 'completed'){return 'taskCompleted'}
        else{ return ''}
    };

    return(
        <Container >
            <li className={switchClass()}>
                <div className='radioInputContainer'>
                    <input type="checkbox" onChange={e => handleCheckbox(e)} />

                    { status == 'opened' ? <Circle size={24} /> : <CheckCircle size={24} weight="fill" />}
                    
                </div>
                <p>{content}</p>
                <button onClick={handleDeleteTask}><Trash size={20}/></button>
            </li> 
        </Container>
    )
};