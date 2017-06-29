const dico = ["gluten", "josephine", "chouquette", "bigasslover", "hormones", "tromperie", "violoncelle", "faucille", "mayonnaise", "congolexicomatisation"];
let wordChoiced = dico[Math.round(Math.random() * 9)];
console.log(wordChoiced + 'choix IA');
let userLetter = prompt("Entre une lettre");

while(userLetter != wordChoiced){

	userLetter = prompt("recommancer");
}

