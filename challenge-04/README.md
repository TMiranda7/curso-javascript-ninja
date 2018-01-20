# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruth = function(a) { 
    return a ? true : false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
?
 isTruth("")
false
 isTruth(0)
false
 isTruth(-0)
false
 isTruth("")
false
 isTruth('')
false
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
> isTruth("a")

> isTruth(1)

> isTruth(100)

> isTruth(true)

> isTruth(0.1)


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
     marca:"Ford",
     modelo:"Ka",
     placa:"PWB6653",
     ano: 2015,
     cor:"vermelho",
     portas: 4,
     assentos: 5,
     quantasPessoas : 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(a) {
 carro.cor = a;
}
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
 return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
  return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
  return carro.marca;
}


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
  return'O carro '+carro.obterModelo() +' é da '+ carro.obterMarca(); 
}


/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addpessoas = function(a) {
   if (carro.quantasPessoas == carro.assentos) {
    return "Lotado!"
   }
   else if (a > carro.assentos){
    return "nao cabe !"       
   } 
    
   else if (a > carro.quantasPessoas ) {
    var frase ;
    carro.quantasPessoas += a;
    frase = a > 1 ? "so cabem mais" : "so cabe mais";
    return frase + (carro.assentos - carro.quantasPessoas) 
   }
   return carro.quantasPessoas = +a; 
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
?

// Mude a cor do carro para vermelho.
?

// E agora, qual a cor do carro?
?

// Mude a cor do carro para verde musgo.
?

// E agora, qual a cor do carro?
?

// Qual a marca e modelo do carro?
?

// Adicione 2 pessoas no carro.
?

// Adicione mais 4 pessoas no carro.
?

// Faça o carro encher.
?

// Tire 4 pessoas do carro.
?   

// Adicione 10 pessoas no carro.
carro.addpessoas(10)

// Quantas pessoas temos no carro?
?
5```
