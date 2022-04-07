//Chiedere all'utente con due prompt quanti km deve percorrere e quanti anni ha il passeggero.

const userKm = parseInt(prompt("Quanti Km devi percorrere?"));
console.log(userKm, typeof(userKm));

const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge, typeof(userAge));

//Definire il prezzo della tratta (0.21 € al km)
const userPrice = 0.21 * userKm
console.log(userPrice, typeof(userPrice));
//Se il passeggero è minorenne applicare il 20% di sconto sul prezzo della tratta
//Se il passeggero è over 65 applicare il 40% di sconto sul prezzo della tratta
let discount
	
	if (18 > userAge) {
		const userPriceDiscount1 = (userPrice * 20) / 100;
		console.log(userPriceDiscount1)
	} else if (userAge > 65) {
		const userPriceDiscount2 = (userPrice * 40) / 100;
		console.log(userPriceDiscount2)
	}

//Impostare l'output del prezzo finale con massimo due decimali

//Stampare l'output nell'html
