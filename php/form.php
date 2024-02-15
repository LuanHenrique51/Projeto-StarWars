<?php


if(isset($_POST['email']) && !empty($_POST['email'])) {

$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);


$to = "victor.emmanuel.lima493@gmail.com";
$subject = "Contato - Star Wars site";
$body = "Nome: ".$nome. "\r\n". //"\r\n" é como se quebra linha em alguns sistemas operacionais.
        "Email: ".$email. "\r\n".
        "Mensagem: ".$mensagem;
$header = "From:victor.emmanuel.lima493@gmail.com"."\r\n".
          "Reply-To:".$email."\r\n".
          "X=mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)) //retorna tru or false, verdadeira se o email foi enviado e falsa se houve algum erro.
{
    echo("E-mail enviado com sucesso!");
}

else {
    echo("O E-mail não pode ser enviado");
}

}


?>