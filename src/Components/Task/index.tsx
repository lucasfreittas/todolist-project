import { Container } from './styles';
import { Trash, Circle, CheckCircle, Check } from "@phosphor-icons/react";

export function Task(){

    function handleCheckbox(event: boolean){
        console.log(event)
    }
    return(
        <Container >
            <li className='taskCompleted'>
                <div className='radioInputContainer'>
                    <input type="checkbox" onChange={e => handleCheckbox(e.target.checked)} />
                    {/* <Circle size={24} /> */}
                    <CheckCircle size={24} weight="fill" />
                </div>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <button><Trash size={16}/></button>
            </li> 
        </Container>
    )
};