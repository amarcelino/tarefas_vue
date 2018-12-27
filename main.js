let vue = new Vue({
    el : '#main',
    data: {
        title: 'Lista de tarefas',
        lista : [],
        tarefa: '',
        percenetTarefa: 40,
        total_tarefas_concluidas : 0
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
    },
    computed: {
        per : function(){
            if( this.lista.length > 0 ){

                


                console.log((this.lista.length /  100 ) * this.tarefa_completa );
                return ( this.tarefa_completa  *  100 ) / this.lista.length
            }else{
                return 0;
            }
        },
        tarefa_completa: function(){
          let concluidas =  this.lista.filter((ok) => {
                return ok.concluida === true;
              })

           return   this.total_tarefas_concluidas = concluidas.length  ;


        }
    },
});