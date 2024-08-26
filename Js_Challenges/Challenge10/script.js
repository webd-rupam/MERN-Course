/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

const adj1="Crazy";
const adj2="Amazing";
const adj3="Fire";

const sh1="Engine";
const sh2="Foods";
const sh3="Garments";

const an1="Bros";
const an2="Limited";
const an3="Hub";


let random= Math.random();


if(random > 0.5 && random < 0.7) {
    console.log(adj1, sh1, an2);
}

else if(random > 0.3 && random < 0.5) {
    console.log(adj2, sh2, an2);
}

else if(random > 0.1 && random < 0.3) {
    console.log(adj3, sh3, an3)
}

else if(random < 0.5){
    console.log(adj2, sh1, an3)
}

else if(random > 0.7) {
    console.log(adj3, sh2, an1);
}

else if(random <= 0.9 && random > 0.7) {
    console.log(adj1, sh3, an1);
}