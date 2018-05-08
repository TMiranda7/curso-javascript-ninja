  /*
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  
  
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
 (function(doc,win){
  'use strict';
    
  var $formCEP = new DOM('[data-js="forCep"]');
  var $input = new DOM('[data-js="endereco_CEP"]');
  var ajax = new XMLHttpRequest();
  var $status = new DOM('[data-js="status"]');  
  $formCEP.on("submit",testando);

  function testando(event){
    event.preventDefault(); 
    messagem('loading');
    ajax.open('GET',getLink());
    ajax.send();
    ajax.addEventListener('readystatechange',handleStateChange)
  }

  function getLink(){
    var result ;
    try{
      result = 'https://viacep.com.br/ws/[CEP]/json/'.
      replace('[CEP]',cleanerCEP());
    }
    catch(e){
      messagem('erro');
    }

    return result;
  }

  function cleanerCEP(){
    return $input.get()[0].value.replace(/\D/g,''); 
  }

  function handleStateChange(){
    if (ajax.readyState === 4 && ajax.status === 200)
      isFillCEPField();
    messagem('erro');  
  }

  function isFillCEPField(){
     messagem('ok');    
     seachValuesEndereco('[data-js="logradouro"]','logradouro')
     seachValuesEndereco('[data-js="cidade"]','localidade')
     seachValuesEndereco('[data-js="bairro"]','bairro')
     seachValuesEndereco('[data-js="estado"]','uf')
     seachValuesEndereco('[data-js="cep"]','cep')  
  }

  function seachValuesEndereco(string,locate){
    var data = parseData();
    new DOM(string).get()[0].textContent = data[locate];
  }

  function parseData(){
    var resultado;
    try{
      resultado = JSON.parse(ajax.responseText) 
    }
    catch(e){
      resultado = null;
      console.log(resultado);
    }
    return resultado;
  }

  function messagem(type){
    var messagem = {
      loading:'aguarde enquanto carrega...',
      ok:replaceCEP('resultado para o CEP [CEP]'),
      erro:replaceCEP('nao achamos respostas para o CEP [CEP]')
    }
    $status.get()[0].textContent = messagem[type]; 
  }

  function replaceCEP(mensagem){
    mensagem.replace('[CEP]',cleanerCEP());
  }

})(document,window) 