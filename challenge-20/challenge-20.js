/*

1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Passe por parâmetro para a IIFE os objetos window e document.
4. Dessa vez não é necessário criar um HTML. Ele já existe, e vamos utilizar
a marcação criada nele para fazer nosso desafio ;)

O HTML NÃO PODE ser alterado!
*/
<<<<<<< HEAD
(function(win,doc){
    'use strict';
=======
(function(doc,win){
>>>>>>> 79863ccedfa7b7d821fb1496cf0c037cc9bfa140
/*
Ao carregar a página, pergunte ao usuário "Qual o seu nome?". Atribua o
resultado à uma variável chamada `username`. Se o usuário não digitar um
nome, `username` deve receber "Desconhecido".
Com a resposta, mostre um alert com a mensagem "Bem vindo [USERNAME]!"
*/
// ?
<<<<<<< HEAD
var UserName = prompt('qual o seu nome ?')|| 'Desconhecido';
alert('Bem Vindo '+UserName) + ' !';

=======
var username;
username = prompt("Qual o seu nome ? ");
if (!username){
    username = "Desconhecido"
}
alert ("bem vindo "+ username+" !");
>>>>>>> 79863ccedfa7b7d821fb1496cf0c037cc9bfa140
/*
Agora, pergunte ao usuário "Qual o seu e-mail?", atribuindo o resultado à
uma variável chamada `email`.
*/
// ?
<<<<<<< HEAD
var email = prompt('qual o seu e-mail?');
=======
var email;
email = prompt("Qual o seu email ? ");
>>>>>>> 79863ccedfa7b7d821fb1496cf0c037cc9bfa140
/*
- Selecione o input de "Nome", atribuindo-o à uma variável chamada
`$inputUsername`.
*/
// ?
<<<<<<< HEAD
var $inputUsername = doc.querySelector('input[type="Text"]');
=======
var $inputUsername = doc.querySelector('input[type="text"]');

>>>>>>> 79863ccedfa7b7d821fb1496cf0c037cc9bfa140
/*
- Selecione o input de "Email", atribuindo-o à uma variável chamada
`$inputEmail`.
*/
// ?
var $inputEmail = doc.querySelector('input[type="email"]');
/*
- Selecione o campo de "Mensagem", atribuindo-o à uma variável chamada
`$message`.
*/
<<<<<<< HEAD
// ?
var $message = doc.querySelector('textarea')
=======
// 
var $message = doc.querySelector('textarea');
>>>>>>> 79863ccedfa7b7d821fb1496cf0c037cc9bfa140
/*
- Selecione o botão de envio do formulário, atribuindo-o à uma variável
chamada `$button`.
*/
// ?
<<<<<<< HEAD
var $button = doc.querySelector('button')
=======
var $button = doc.querySelector('button') ;
>>>>>>> 79863ccedfa7b7d821fb1496cf0c037cc9bfa140
/*
Preencha os campos de "Nome" e "Email" que estão no documento com os valores
entrados pelo usuário.
*/
// ?
<<<<<<< HEAD
 $inputUsername.value = UserName;
 $inputEmail.value = email;
=======
$inputUsername.value = username;
$inputEmail.value = email;


>>>>>>> 79863ccedfa7b7d821fb1496cf0c037cc9bfa140
/*
Adicione um listener de evento de click ao botão que faça o seguinte:
1. Verificar se todos os campos estão preenchidos:
- Mostrar um alert para cada campo não preenchido, como abaixo:
- Se o campo de "Nome" não estiver preenchido, mostrar:
    - "Preencha o nome do usuário!"
- Se o campo de "Email" não estiver preenchido, mostrar:
    - "Preencha o e-mail!"
- Se o campo de "Mensagem" não estiver preenchido, mostrar:
    - "Preencha a mensagem!"
- Se o campo de "Email" for inválido, mostrar:
    - "Entre com um e-mail válido!"

2. Para verificar se o e-mail é válido use a função `isValidEmail`, passando
o e-mail que foi entrado no campo de "Email" por parâmetro. (A função
`isValidEmail` será criada logo abaixo).

3. Se tudo estiver OK, pergunte ao usuário:
    - "Tem certeza que deseja enviar o formulário?"
Se for confirmado, mostre um alerta com a mensagem:
    - "Enviado com sucesso!"
Caso contrário, mostre um alerta com a mensagem:
    - "Não enviado."
*/
// ?
$button.addEventListener('click',function(){
    event.preventDefault();
    if (!$inputUsername.value)
      return alert('Campo nao preenchido !');
    if (!$inputEmail.value){
      return alert('Campo E-mail nao preenchido !');}
      else{
         if (!isValidEmail($inputEmail.value))
           return alert('e-mail invalido!')
      };
    if (!$message.value)
        return alert('preencha o campo mensagem !') ; 

    if (confirm('tem certeza que deseja enviar ?'))
     return alert('enviado com sucesso !');

<<<<<<< HEAD
},false)
=======
$button.addEventListener('click', function(){
    event.preventDefault();

    if (!isValidEmail($inputEmail.value))
      return alert("email invalido");
    if (!$inputUsername.value ||!$inputEmail.value ||!$message.value ){
      return alert('Verifique os Campos Obrigatorios ')
    };
    if ( !confirm('tem certeza ?'))
        return alert ("Não enviado !")
    return alert("enviado com sucesso!")

} ,false)

>>>>>>> 79863ccedfa7b7d821fb1496cf0c037cc9bfa140
/*
Crie uma função chamada `isValidEmail`, que será usada na validação do
envio do formulário.
Essa função deve receber o e-mail por parâmetro e verificar se é um e-mail
válido.
As regras para validação são:
    - O nome do usuário (antes do arroba), pode ser qualquer caractere
    alfanumérico, incluindo o underscore, sinal de "+" e o ponto;
    - Após o arroba, o domínio pode conter somente caracteres alfanuméricos
    e o underscore;
    - Para a extensão, o domínio deve vir seguido de um ponto, e no mínimo
    2 caracteres alfanuméricos;
    - O final do domínio é opcional, mas se existir, deve começar com um
    ponto, seguido de no máximo 2 caracteres alfanuméricos.

Alguns e-mails válidos que podem ser usados para testar:
    - "meu.email+categoria@gmail.com"
    - "juca_malandro@bol.com.br"
    - "pedrobala@hotmail.uy"
    - "sandro@culinaria.dahora"

Alguns e-mails inválidos:
    - "walter-da-silva@maraca.br"
    - "rita-marica@titica.a.b"
    - "agua_@evida.br.com"
*/
<<<<<<< HEAD

function isValidEmail (email){
    return /\w+([\._]?\w+)?@\w+\.com(.\w(2))?/.test(email)
}
// ?
})(window,document)     
=======
// 
function isValidEmail (email){
    return /^[\w+.]+@\w+\.\w{2,}(\.\w{2})?/m.test(email)
}
})(document,window)
>>>>>>> 79863ccedfa7b7d821fb1496cf0c037cc9bfa140
