let vue = new Vue({
    el : '#main',
    data: {
        title: 'Lista de tarefas',
        lista : [],
        tarefa: '',
        percenetTarefa: 0
    },
    methods: {
        addTarefas : function(){
            if( this.tarefa !== '' ){
                
                this.lista.push( { item: this.tarefa, concluida: false } );
                
               //listaPessoas.push(novaPessoa);
               localStorage.setItem('listaTarefas',JSON.stringify( { item: this.tarefa, concluida: false }));   
               
               this.tarefa = '';            
            }
        },





    }
});