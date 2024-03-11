console.log("Biglietto del treno form")

const buttonElement = document.getElementById("submit")
console.dir(buttonElement)

const kmInputElement = document.getElementById("Km")
console.dir(kmInputElement)

const etaInputElement = document.getElementById("Eta")
console.dir(etaInputElement)

const prezzoInputElement = document.getElementById("prezzo-biglietto")

buttonElement.addEventListener("click" , function(){
    
    const km = parseFloat(kmInputElement.value)
    console.log("numero di chilometri da fare: " , km)
    
    const eta = parseInt(etaInputElement.value)
    console.log("La tua età è di: " , eta + " anni")
    const numeroChilometriPercorsi = km
    const etaPassegero = eta
    const prezzoInteroDelBiglietto = numeroChilometriPercorsi * 0.21;
    const scontoMinorenne = prezzoInteroDelBiglietto * 0.2;
    const prezzoMinorenne = prezzoInteroDelBiglietto - scontoMinorenne;
    const scontoOverSessantacinque = prezzoInteroDelBiglietto * 0.4;
    const prezzoOverSessantacinque = prezzoInteroDelBiglietto - scontoOverSessantacinque;
    const numero = parseFloat(prezzoMinorenne.toFixed(2));
    const numero2 = parseFloat(prezzoOverSessantacinque.toFixed(2));
    const numero3 = parseFloat(prezzoInteroDelBiglietto.toFixed(2));
    if (etaPassegero < 18) {
        console.log("Sei minorenne quindi paghi: ", numero + "€")
    } else if (etaPassegero > 65) {
        console.log("Sei un over 65 quindi paghi: ", numero2 + "€")
    } else {
        console.log("Il prezzo del biglietto è di: ", numero3 + "€")
    }
    prezzoInputElement.innerHTML = numero


})