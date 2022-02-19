
let numDeUsuarios = parseInt(prompt('Informe quantos usuários deseja cadastrar:')) 

let Usuarios = [] //  array guardar os dados dos usuarios

class Usuario {  //declaração da classe 

    constructor(nome,sobrenome, idade){  //metodo constructor
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
      
    }

}

for(let i = 0; i < numDeUsuarios; i++){     //for ([inicialização]; [condição]; [expressão final])   declaração
      alert("Dados do usuario " + (i+1) + "")
    let cadastro = new Usuario(prompt('Nome:'),prompt('Sobrenome:'),parseInt(prompt('Idade:')))
    Usuarios.push(cadastro) //usuarios recebe dados de cadastro
}

for (let dados of Usuarios) {   
    document.write(`<p>Dados do usuário:</p>`)
    document.write(`<p>Nome: ${dados.nome}</p>`)  
    document.write(`<p>Sobrenome: ${dados.sobrenome}</p>`)
    document.write(`<p>Idade: ${dados.idade}</p>`)

}



/*
******inicialização****
Uma expressão (incluindo expressões de atribuição) ou declarações variáveis.
 Geralmente usada para iniciar o contador de variáveis. Esta expressão pode, 
 opcionalmente, declarar novas variáveis com a palavra chave var. Essas variáveis 
 não são locais no loop, isto é, elas estão no mesmo escopo que o loop for está. 
 Variáveis declaradas com let são locais para a declaração.
O resultado desta expressão é descartado.

  ****condição****
Uma expressão para ser avaliada antes de cada iteração do loop. 
Se esta expressão for avaliada para true, declaração será executado. 
Este teste da condição é opcional. Se omitido, a condição sempre será avaliada
como verdadeira. Se a expressão for avaliada como falsa, a execução irá para a
primeira expressão após a construção loop for.

 ******expressão final*****
Uma expressão que será validada no final de cada iteração de loop. 
Isso ocorre antes da próxima avaliação da condição. Geralmente usado para atualizar 
ou incrementar a variável do contador.

 *****declaração****
Uma declaração que é executada enquanto a condição for verdadeira. 
Para executar múltiplas condições dentro do loop, use uma 
instrução de bloco ({...}) para agrupar essas condições. 
Para não executar declarações dentro do loop, use uma instrução vazia (;).*/