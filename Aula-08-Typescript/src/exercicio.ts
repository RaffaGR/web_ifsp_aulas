type Tarefa = {descricao: string, prioridade: number, concluida: boolean};

const tarefas: Tarefa[] = [
    { descricao: "Fazer relatório", prioridade: 2, concluida: false },
    { descricao: "Enviar e-mail", prioridade: 3, concluida: false },
    { descricao: "Reunião com equipe", prioridade: 1, concluida: false }
];

function imprimirTarefa(descricao: string, indice: number, totalTarefas: number): void {
    console.log(`Tarefa concluída: ${descricao}`);
    console.log(`Progresso: ${indice + 1}/${totalTarefas}`);
    console.log("------------------------");
}

const contador = 0;
const foco = 1;
function executarTarefas(
    tarefas: Tarefa[], 
    callback: (descricao: string, indice: number, qtd: number) => void,
    timeInterval: number = 1000) {
        // let copiaTarefas = [...tarefas].sort((a,b)=> a.prioridade - b.prioridade);
        tarefas.sort((a,b)=> a.prioridade - b.prioridade);
        let contador = 0;
        let totalT = tarefas.length;
        const interval = setInterval(()=> {
            if(contador >= totalT || tarefas[contador]?.descricao === "cancelar"){
                clearInterval(interval);
                // return;
            }else{
                const tarefa = tarefas[contador];
                if(tarefa) {
                    tarefa.concluida = true;
                    callback(tarefa.descricao, contador, totalT);
                    contador ++;
                }
            }
        }, timeInterval);
}

executarTarefas(tarefas, imprimirTarefa, 1500);

