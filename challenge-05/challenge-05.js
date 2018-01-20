/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var qualquer = [1,7,'nome',3,true]
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
var myFun = function(args) {
    return args
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
myFun(qualquer[1]) 

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
// ?
var myFun = function(args,numero) {
    return args[numero ]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var arrays = [true,1.2,"teste",1000,-1]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

myFun(arrays,0)
myFun(arrays,1)
myFun(arrays,2)
myFun(arrays,3)
myFun(arrays,4)
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

var book = function(NOME_DO_LIVRO) {
    var library = {
       'livro de teste '      :{   quantidadePaginas:95,
                                   autor:'gerardo',
                                   editora:'gera3'} ,
       'o aprendiz de delphi' :{   quantidadePaginas:152,
                                   autor:'marcos Diz',
                                   editora:'sextante'},
       'o ninja do javascript':{   quantidadePaginas:478,
                                   autor:'thiago',
                                   editora:'arqueiro'}                            
                   };
      return  !NOME_DO_LIVRO ? library : library[NOME_DO_LIVRO] // usando ternario
   }
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ? 
console.log('O livro livro de teste tem '+ book('livro de teste ').quantidadePaginas + 'páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log('O Autor do livro  é '+ book('livro de teste ').autor )
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('foi publicado pela editora '+ book('livro de teste ').editora )
// ?