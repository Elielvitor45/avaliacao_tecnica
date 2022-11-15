const pessoas =[
    { name: "Eliel Vitor", age: 20},
    { name: "Gabriel Gomes",age: 27},
    { name: "Matheus Fernandes",age: 31},
    { name: "Gustavo Rafael",age: 43},
    { name: "Vailson Mucuta",age: 13},
    { name: "Henrique Gonçalves",age: 17},
    { name: "Rodrigo borges",age: 59},
];

function ImprimirNome(name){
    return PessoaP = pessoas. find(pessoaobj=>pessoaobj. name===name);
}
//Exemplo para testar a funcionalidade da função ImprimirNome
//console.log(ImprimirNome('Rodrigo borges'));
//Função utilizada para imprimir apenas o primeiro nome
function NomePessoas(){
    pessoas.forEach(pessoa=>console.log(pessoa.name.split(' ')[0])) ;
}
//Exemplo para testar a funcionalidade da função NomePessoas
//console.log(NomePessoas());
//Função para adicionar id as pessoas
function addId(){
    for(i=0;i<pessoas.length;i++){
        pessoas[i] = {id:i+1,name:pessoas[i].name,agr:pessoas[i].age};

    }
    return pessoas;
}
//Exemplo para testar a funcionalidade da função id
//console.log(addId());
//Função para filtrar quem pode ter habilitação
function Podeterhabilitacao(){
    const habilitacao = [];
    for(i=0;i<pessoas.length;i++){
        if(pessoas[i].age > 17){
            habilitacao[i] = pessoas[i];
        }
    }
    return habilitacao;
}
//Exemplo para testar a funcionalidade da função Podeterhabilitacao
//console.log(Podeterhabilitacao());
function media(){
    total = 0;   
    for(i=0;i<pessoas.length;i++){
        total += pessoas[i].age;    
    }
    total = total/pessoas.length;
    return total;
}
console.log(media());

