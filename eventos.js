

function atualizarQuantidade() {
    document.getElementById('numeros').innerHTML = buscar().length; //contando quantidade tarefas
}
   

function listarTarefas() {
    let conteudo = buscar().sort().map(function (tarefa) { //ordenando tarefas com sort()
        return `
            <div>
                <input type="checkbox"> 
                ${tarefa.titulo}


                <span class="badge ${tarefa.prioridade === 'Baixa' && 'bg-primary'} ${tarefa.prioridade === 'Media' && 'bg-warning'} ${tarefa.prioridade === 'Alta' && 'bg-danger'}">
                    ${tarefa.prioridade}
                </span>
            </div>
        `;
    });

    document.getElementById('tarefas').innerHTML = conteudo.sort().join('');  //ordenando tarefas com sort()

}

function addTarefa() {
    event.preventDefault();

    let titulo = document.getElementById('input_nova_tarefa').value;

    if (titulo.trim() === '') { 
        alert('Tarefa invalida');
        return;
    }

    let titulos = buscar().map((tarefa) => {  //transformando array e criando outro só de string
        return tarefa ? tarefa.titulo : "";
    });

    let existe = false;                     // tarefa existe?
    titulos.forEach((t) => {
        if (true === t.includes(titulo)) {
            existe = true;
            return;
        }
    });
    
    if(existe == false){                      //se não existir pode salvar
        salvar(titulo, input_prioridade.value);
    }else{
        alert('Tarefa já existe');         // se existir, avisar ao usuário 
    }

    document.getElementById('input_nova_tarefa').value = '';

    atualizarQuantidade();
    listarTarefas();
}



//vai acontecer assim que o usuario entrar na pagina
listarTarefas();
atualizarQuantidade()
