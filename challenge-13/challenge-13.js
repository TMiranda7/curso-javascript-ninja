/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
console.log( 'O array em formato de string é:' );
// ?
    arr = [1,3,5,7,9]

arr.toString()

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
// ?

sul = ['Rio sul' , 'parana' , 'santa catarina' ]
suldeste = ['sao paulo' , 'rio janeiro' , 'minas gerais' , 'espirito santo' ]

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
console.log( '\nAlguns Estados do Brasil:' );
// ?
var brasil = suldeste.concat(sul)
console.log(brasil)
/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );
// ?
brasil.splice(0,0,'acre','amazonas','para')
console.log(brasil)

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );
// ?

console.log(brasil.shift())
/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
// ?
var newSul = brasil.slice(4,6)

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
// ?
console.log(newSul)
/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
// ?
console.log(brasil.slice())
/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
// ?
nordeste = ['alagoas','bahia','ceara','sergipe','Rnorte','pernambuco','piaui','maranhao','paraiba']
/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
// ?
console.log(nordeste.slice())
/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
// ?
newSudeste = brasil.splice(2,4)
console.log(newSudeste)
/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
// ?
brasil = brasil.concat(nordeste)
/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
// ?
console.log(newSudeste.slice())
/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
// ?

console.log(brasil.slice())
/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
// ?
newBrasil = [];
 brasil.forEach(function(item,indice) {
    newBrasil.push( {id : indice , estado :item}) //FAÇO A INSERCAO A PARTI DO .PUSH
//  newBrasil =  {id : indice , estado :item} // ERRADO !!!!!
});
/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
// ?
console.log(newBrasil)
/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
// ?
if ( newBrasil.every(function(item){ // OS PARAMETROS SAO PARA OS ITENS 
    return item.lencht > 7})){
        console.log('sim todos os estados tem 7 letras')
    } else {
        console.log('Nem todos tem 7 letras')
    }
//--------------------------------------------------------------------------------------//
    console.log( newBrasil.every(function(item){ // OS PARAMETROS SAO PARA OS ITENS 
        return item.lencht > 7})?'sim todos os estados tem 7 letras':'Nem todos tem 7 letras')
/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
// ?
 seExiste = newBrasil.some(function(item){
    return item =='ceara'||'Ceará'||'ceará'
})
console.log(seExiste? 'existe sim!':'nao existe')

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
// ?
novoNewBrasil = newBrasil.map(function(item,indice){
    item.id++;
    item.estado += ' Pertence !'  //CONCATENOU STRING
    return item
})


/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
// ?
console.log(novoNewBrasil)
/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
// ?
teste = novoNewBrasil.filter(function(item,indice){
    return item.id % 2 == 0 
})
/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
// ?
console.log(teste)