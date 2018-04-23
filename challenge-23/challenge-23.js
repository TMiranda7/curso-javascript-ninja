/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
(function(win,doc){
'use strict';
    var $visor  = doc.querySelector('[data-js="Display"]');
    var $botaonumero = doc.querySelectorAll('[data-js="button-number"]');
    var $botaoCE = doc.querySelector('[data-js="button-opetation-CE"]'); 
    var $botaoOpercao = doc.querySelectorAll('[data-js="button-opetation"]');
    var $botaoigual = doc.querySelector('[data-js="button-opetation-="]')
 
    Array.prototype.forEach.call($botaonumero,function(botaoNumer){
      botaoNumer.addEventListener("click",aoclicarBotaoNumero,false) 
    })

    Array.prototype.forEach.call($botaoOpercao,function(botaoOperacao){
      botaoOperacao.addEventListener("click",cliqueOperacao,false)
    })

    function cliqueOperacao(){
      $visor.value = verificaUltimoDigito($visor.value);
      $visor.value += this.value;
    }

    $botaoCE.addEventListener("click",aoClicarCE,false);
    $botaoigual.addEventListener("click",seraIgual,false);

    function aoclicarBotaoNumero(){
      if ($visor.value === "0" )
        $visor.value="" ;
      $visor.value += this.value;      
    };

    function aoClicarCE(){
      $visor.value = 0;
    };

    function isOperador(digito){
      var operadores = ['+','-','*','÷']
      var ultimoItem = digito .split('').pop();  
      return operadores.some(function(operador){
        return operador === ultimoItem;
      }) 
    };

    function verificaUltimoDigito(numero){
      if (isOperador(numero))
        return numero.slice(0,-1)
      return numero;
    };

    function seraIgual(){
      $visor.value = verificaUltimoDigito($visor.value);
      var allValue = $visor.value.match(/\d+[+*÷-]?/g);
      $visor.value = allValue.reduce(function(acumulado,atual){
        var primeiroValor = acumulado.slice(0,-1);
        var operador = acumulado.split('').pop();
        var ultimoValor = verificaUltimoDigito(atual);
        var ultimoSinal = isOperador(atual) ? atual.split('').pop() : '';
          switch(operador){
            case'+':return  (Number(primeiroValor) + Number(ultimoValor)) + ultimoSinal ;
            case'-':return  (Number(primeiroValor) - Number(ultimoValor)) + ultimoSinal ; 
            case'*':return  (primeiroValor  * ultimoValor) + ultimoSinal ;
            case'÷':return  (primeiroValor / ultimoValor) + ultimoSinal ;
          };
      })
      $visor.value = result;
    ;}

})(window,document);