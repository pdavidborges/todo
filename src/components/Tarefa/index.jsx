import { StyleTarefa } from "./style";

export function Tarefa(props) {

    //console.log(props);

    return (
        
       <StyleTarefa>
            <p>{props.titulo}</p>     
            <button onClick={()=> props.onRemove(props.id)}> x </button>
       </StyleTarefa>

    )
}