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
    const etaPassegero = parseInt(etaInputElement.value)
    console.log("La tua età è di: " , etaPassegero + " anni")
    const prezzoInteroDelBiglietto = km * 0.21;
    let sconto = 0
    if (etaPassegero<18){
        sconto = prezzoInteroDelBiglietto * 0.2
    } else if (etaPassegero>65){
        sconto = prezzoInteroDelBiglietto * 0.4
    }
    const prezzo = prezzoInteroDelBiglietto - sconto
    const result = parseFloat(prezzo.toFixed(2))
    if (etaPassegero < 18) {
        prezzoInputElement.innerHTML = "Sei minorenne quindi paghi: " + result + "€"
    } else if (etaPassegero > 65) {
        prezzoInputElement.innerHTML = "Sei over 65 quindi paghi: " + result + "€"
    } else {
        prezzoInputElement.innerHTML = "Il prezzo del biglietto è: " + result + "€"
    }
    
})