alert ("Bem vindo ao jogo do número secreto");
let numeroMaximo = 100
let secretNumber = parseInt(Math.random() * numeroMaximo + 1);
console.log(secretNumber);
let chute
let tentativas = 1

while(chute != secretNumber) {
    let chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}.`);
    if (chute == secretNumber) {
        break}
    else {
        if (secretNumber > chute) {
            alert("Chutou baixo homi!")
        }
        else {alert("Chutou alto D+ bixo!")}
        tentativas++
    }  
}

var palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`parabens pourra!!! O número secreto é ${secretNumber}. e vc o encontrou em ${tentativas} ${palavraTentativa}. parabens!! ^-^`);

//if(tentativas > 1){
//    alert(`parabens pourra!!! O número secreto é ${secretNumber}. e vc o encontrou em ${tentativas} tentativas. parabens!! ^-^`);
//}
//    else{
//    alert(`parabens pourra!!! O número secreto é ${secretNumber}. e vc o encontrou em ${tentativas} tentativa. parabens!! ^-^`);
//}