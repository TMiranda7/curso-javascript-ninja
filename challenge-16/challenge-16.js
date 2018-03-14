/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/
(function(){
/*
Declare uma variável chamada `name` que receba seu primeiro nome.
Mostre no console todas as letras do seu nome separadas, com a frase:
- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
Ex: no caso do nome ser "Fernando", deve mostrar as frases:
- "F é a 1ª letra do meu nome."
- "e é a 2ª letra do meu nome."
E assim por diante, até a última.
*/
console.log( 'As letras do seu nome:' );
// ?

var nome = 'Thiago'

for (var i = 0 ; i < nome.length ; i++)
{
     console.log(nome.charAt(i) +' é a posicao '+ (i+1)+'ª'  )
}

/*
- Declare uma variável chamada `fullName`, que receba seu nome completo,
escrito no formato de slug (caixa baixa e palavras separadas por um traço).
Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
por um espaço.
- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
nome, então fique à vontade para usar as artimanhas que já viu até agora no
curso para fazer isso funcionar corretamente :)
- Mostre no console o nome no formato slug, e o resultado final. Use um
console.log para cada formato.
*/
console.log( '\nNome convertido à partir de um slug:' );
// ?
/*
var fullName
fullName = 'thiago-miranda-de-souza' 
for (i = 0 ; i < fullName.length ; i++)
{
var arg =[]
    if (fullName.charAt(i-1)==='-'|| fullName.charAt(i-1)=== undefined || fullName.charAt(i-1)===' ')
    {
        arg.push( fullName.toUpperCase(i))       
    };
     arg.push(fullName.charAt(i))
}   


-------------------------------
*/
fullName = 'thiago-miranda-de-souza' 
newfull=''
newfull = fullName.split('-').map(function( name ) {
    return name.charAt(0).toUpperCase() + name.slice(1)
})
console.log(newfull.join())

//----------------------------------------------------

fullyouName = 'irythelly-de-moura-viana' 
newyou = fullyouName.split('-').map(function(parametro){
    return parametro[0].toUpperCase() + parametro.slice(1)
})
console.log(newyou.join(' '))


/*
- Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
ser um "e". No final, concatene com a frase: " são meus amigos.".
O resultado final deve ficar mais ou menos assim:
- "João, Maria, Roberto, Pedro e Marcos são meus amigos."
- Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
5 nomes foi somente uma sugestão ;)
*/
console.log( '\nMeus amigos:' );
// ?
arrnome = 'João, Maria, Roberto, Pedro, Marcos'
var novov
 newarr = arrnome.split(', ')
console.log(newarr)

novov= newarr.reduce(function(acumulado,atual,index){
    var separador = newarr.length -1 === index ? ' e ' : ' , '
    return acumulado + separador + atual 
    }).concat(' são meus amigos ')

 /*
Usando o replace(), faça a string "Roberto" virar "Roberta".
Mostre o resultado no console.
*/
console.log( '\nEra "Roberto", agora é:' );
// ?
newvalue = novov.replace('to','ta')

console.log(novov)
/*var newvalue = arrnome.reduce(function(acumulado,atual,index){
    return acumulado = acumulado +' , '+ atual
})
*/
/*
Mostre no console a parte "nando" da string "Fernando". Use o método que
faz a busca do final para o início da string.
*/
console.log( '\nParte de uma string:' );
// ?
console.log('Fernando'.substring(3,8))
/*
Declare uma variável chamada `myName`, que receba o seu primeiro nome,
escrito de forma natural.
Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
e minúsculas.
- Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
de qualquer tamanho, escrito de qualquer forma.
Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
*/
console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
// ?

    
var  myname = 'Thiago'
var meu  = []
myname.replace(/\w/g , function(nomeTodo,l1,l2){
    return l1.toUpperCase(),l2.toLowerCase()

for (var i = 0 ; i++ ; i< myname.length-1)
    if (i % 0 == 0){
     meu.push(myname[i])    
    }else{
     meu.push(myname[i])   
    }
    console.log(meu)
})()