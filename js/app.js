const dico = ["gluten", "josephine", "chouquette", "bigasslover", "hormones", "tromperie", "violoncelle", "faucille", "mayonnaise", "congolexicomatisation"];
let wordChoiced = dico[Math.round(Math.random() * 9)];
console.log(wordChoiced);

let userLetter = prompt("Entre une lettre");

for (let i = 0; i < wordChoiced.length; i++){
	if(userLetter == wordChoiced[i]){
		console.log(wordChoiced[i]);
	} else { console.log("FAUX")}
};

