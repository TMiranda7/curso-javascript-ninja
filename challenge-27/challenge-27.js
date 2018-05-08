/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
(function(){
    function DOM(string){
        this.element = document.querySelectorAll(string);
    }

    DOM.prototype.on = function on(evento,callback){
      Array.prototype.forEach.call(this.element,function(element){
        element.addEventListener(evento,callback,false);
      })
    }
    
    DOM.prototype.off = function off(evento,callback){
      Array.prototype.forEach.call(this.element,function(element){
        element.removeEventListener(evento,callback,false);
      })
    }
    
    DOM.prototype.forEach = domEvents('forEach');
    DOM.prototype.map = domEvents('map');
     DOM.prototype.filter = domEvents('filter');
    DOM.prototype.reduce = domEvents('reduce');
    DOM.prototype.reduceRight = domEvents('reduceRight');
    DOM.prototype.every = domEvents('every');
    DOM.prototype.some = domEvents('some');

    function domEvents (evento){ 
      return function(){
        Array.prototype[evento].apply(this.element,arguments);
      }
    }   

    var $a = new DOM('[data-js="link"]');
    $a.on('click',handleclick);

    function handleclick(e) {
    e.preventDefault();
    console.log('clicou');
    $a.off('click',handleclick);
    }

})()