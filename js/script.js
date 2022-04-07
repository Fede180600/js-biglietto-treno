//Chiedere all'utente con due prompt quanti km deve percorrere e quanti anni ha il passeggero.

const userKm = parseInt(prompt("Quanti Km devi percorrere?"));
console.log(userKm, typeof(userKm));

const userAge = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log(userAge, typeof(userAge));

//Definire il prezzo della tratta (0.21 € al km)
const userPrice = 0.21 * userKm
console.log(userPrice, typeof(userPrice));
//Se il passeggero è minorenne applicare il 20% di sconto sul prezzo della tratta
//Se il passeggero è over 65 applicare il 40% di sconto sul prezzo della tratta
let userPriceDiscounted = userPrice;
	
if (userAge < 18) {
	userPriceDiscounted = userPrice -(userPrice * 20) / 100;
	console.log(userPriceDiscounted)
} else if (userAge >= 65) {
	userPriceDiscounted = userPrice - (userPrice * 40) / 100;
	console.log(userPriceDiscounted)
}

//Impostare l'output del prezzo finale con massimo due decimali
const priceFormatted = userPriceDiscounted.toFixed(2);
console.log(priceFormatted, typeof(priceFormatted));
//Stampare l'output nell'html
document.getElementById('my-price').innerHTML = priceFormatted;