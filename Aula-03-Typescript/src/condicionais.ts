let idade:number; /* Linguagem estatica seria sem a tipagem, n afeta a performace, só é mais verboso */

idade = 18;

if (idade < 12) {
    console.log("Criança");
}else if (idade < 18) {
    console.log("AFelescente");
}else {
    console.log("Adulto");
}