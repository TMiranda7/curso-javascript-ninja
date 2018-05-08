(function(doc,win){
  'use strict';
 
  function DOM(string){
      this.element = doc.querySelectorAll(string);
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

  DOM.prototype.get = function (){
    return this.element;
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


window.DOM = DOM;
})(document,window)