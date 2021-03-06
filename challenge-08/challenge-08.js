/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
// ?
var sum = function calculateSum(x,y) {
  return x + y;
}
/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
// ?
var NUMERO1= 10,NUMERO2 = 5

   console.log("A soma de "+NUMERO1+" e "+NUMERO2+" é :"+sum(NUMERO1,NUMERO2) )

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
// ?
console.log(" o nome da function criada acima é "+ sum.name)
/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
// ?
var showName = function MeuNome() {
  return showName.name;
}


/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
// ?
var varShowName = showName();
/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
// ?
console.log("a função "+ showName +" retorna "+showName.name)
/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
// ?
var calculator = function(operador){
  return function(x,y){
    switch(operador) {
      case "+" : return x + y 
      break;

      case "*"||"X" : return x * y
      break;
      
      case "/" : return x / y
      break;
      
      case "-" : return x - y
      break;
      
      default : "valor invalido !"

    } 
    console.log(x+' '+ operador+' '+ y )
  }
}
/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
// ?
var sum = calculator("*");
/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
// ?
sum(5,3)
/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
// ?
var subtraction = calculator("-");
var multiplication = calculator("*");
var division = calculator("/");
var sum = calculator("+");

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
 subtraction(5,3)
2
 multiplication(5,3)
15
 division(5,3)
15
 division(5,3)
1.6666666666666667
 sum(5,3)
8
