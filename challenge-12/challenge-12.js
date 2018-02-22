/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

    

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
console.log( 'Propriedades de "person":' );
var person = {
    name: 'Thiago',
    lastname: 'Miranda',
    age: 24
}

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?

console.log(Object.keys(person));
/*for (prop in person){
    console.log(prop+' : '+ person[prop] )
}
*/
/*
Crie um array vazio chamado `books`.
*/
// ?
var books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?

console.log( '\nLista de livros:' );

books.push({nome:'liv1',pags:25})
books.push({nome:'arq1',pags:79})
books.push({nome:'files',pags:100})

/*
Mostre no console todos os livros.
*/
// ?

        console.log(JSON.stringify(books) )
        console.log(books)

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ?
books.pop()

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// ?
console.log(JSON.stringify(books) ) 
/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );
  books = JSON.stringify( books )


/*
Mostre os livros nesse formato no console:
*/
// ?
   console.log( books );
/*
Converta os livros novamente para objeto.
*/
// ?
books = JSON.parse( books );


console.log( '\nAgora os livros são objetos novamente:' );
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?
    for (var i = 0 ; i < books.length ; i++)   {
            for ( var prop in books[i] ) {  //AQUI É NECESSARIO CONCATENAR O INDICE DO ARRAY P/ IDENTIFICAR PROPS
                console.log(prop + ' :  ' + books[i][prop])
            }
    }
/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );

var myName = ['M','I','R','A','N','D','A']

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?
console.log( myName.join('')) 
console.log( '\nMeu nome invertido é:' );


/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?
console.log( myName.reverse() )
console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/

console.log( myName.sort() )
// ?


var array = [4,5,6,7,8,9,1,2,3]

console.log(array.sort())

array.forEach(function (array) {
    console.log(array)
})


averi =  array.every(function(array){
    console.log(array)
    return array > 4
})
console.log(averi)
