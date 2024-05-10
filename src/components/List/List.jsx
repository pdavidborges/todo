import { useEffect, useState } from "react";
import { Task } from "../Task/Task";
import { StyledList } from "./styles";


export function List() {


    // const tasks = [
    //     {id : 1, titulo: 'Pagar Contas'},
    // ];

    //Estado
    //[nome do estado, função atualizadora] = useState(valor inicial do estado)
    //if(localStorage.getItem('tarefas' != null) converte seu valor para objeto senão, inicia com um array vazio)
    const [tasks, setTasks] = 
    useState(localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem('tarefas')) : []); 

    const [newTask, setNewTask] = useState('');
    
    // function resetTasks(e){
    //     e.preventDefault();
    //     setTasks([]);
    // }

    function addTask(e) {
        e.preventDefault();//cancelando o evento padrão do botão        
        //tasks.push({id:2, titulo: 'Tarefa teste'})        

        //Atualizando o valor do estado (o componente será atualizado)
        //...tasks -> copiando o conteúdo do Array (Spread Operator)
        setTasks([...tasks, { id: new Date().getTime(), titulo: newTask }]);
        setNewTask('');        
    }

    function removeTask(id){
        //console.log(`Tarefa ${id} removida`);

        setTasks(
            //Percorrendo o Array em busca das tarefas que tem seu id diferente do id passando no click do X
            tasks.filter(task => (task.id != id))
        );

    }

    //Função especial do React que roda após toda a montagem do componente
    //Quando o componente foi totalmente rendezido na tela
    //[task] dependência, ou seja, o que vai fazer o useEffect ser executado, 
    //se estiver vazio, o useEffect só é executado uma vez
    useEffect(()=>{
        localStorage.setItem('tarefas',JSON.stringify(tasks));
    },[tasks])

    return (
        <StyledList>
                
                <form>                    
                    <input
                        type="text"
                        placeholder="Digite sua tarefa"
                        value={newTask}
                        onChange={(e) => { setNewTask(e.target.value) }}
                    />

                    <button onClick={addTask} disabled={newTask == ''}>Criar</button>
                    
                </form>
            

            {
                tasks.map(task => (
                    //onRemoveTask={removeTask} -> Passando a função como propriedade para o componente 
                    <Task titulo={task.titulo} id={task.id} key={task.id} onRemoveTask={removeTask} />
                ))
            }
        </StyledList>
    )
}