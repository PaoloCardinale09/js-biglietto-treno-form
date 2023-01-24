

// // CHIEDO IL NUMERO DI KM CHE IL PASSEGGERO VUOLE PERCORRERE
// // CHIEDO L'ETA' DEL PASSEGGERO
// // PREZZO DEFINITO IN BASE AI KM (0.21 € AL KM)
// // SCONTO 20% PER I MINORENNI (< 18 ANNI) 
// // SCONTO 40% PER GLI OVER 65 (> 65 ANNI)
// // PREZZO FINALE CON 2 DECIMALI 

// // CHIEDO IL NUMERO DI KM CHE IL PASSEGGERO VUOLE PERCORRERE
// // const travelDistance = parseInt(prompt('Quanti km devi percorrere?'));
// // console.log(`Il tuo viaggio è lungo ${travelDistance}km`);

// // CHIEDO L'ETA' DEL PASSEGGERO
// // const userAge = parseInt(prompt('Quanti anni hai?'));
// // console.log(`Hai ${userAge} anni`);

// // PREZZO DEFINITO IN BASE AI KM (0.21 € AL KM)
// const pricePerKm = .21

// //MOLTIPLICARE travelDistance * 0.21 € 
// let standardPrice = (travelDistance * pricePerKm);
// // console.log(`Il prezzo standard della corsa è ${standardPrice.toFixed(2)}€`);

// if (isNaN(userAge) || isNaN(travelDistance)) {
//     // Stampo messsaggio di errore
//     alert(`I valori inseriti non sono validi. 
// Ricaricare la pagina e riprovare`)
// } else {
//     // SCONTO 20% PER I MINORENNI (< 18 ANNI) 
//     if (userAge < 18) {
//         let discountUnder = standardPrice * .2;
//         let underPrice = standardPrice - discountUnder;

//         // document.getElementById("kmDistance").innerHTML = (` value="underPrice"`);
//         // document.getElementById("kmDistance").innerHTML = (`Il costo Standard del biglietto è ${standardPrice.toFixed(2)} € <br>Essendo minorenne il costo del tuo biglietto è di ${underPrice.toFixed(2)} € `);
//     }

//     // SCONTO 40% PER GLI OVER 65 (> 65 ANNI)
//     else if (userAge >= 65) {
//         let discountOver = standardPrice * .4;
//         let overPrice = standardPrice - discountOver;

//         // document.getElementById("travelSummary").innerHTML = (`Il costo Standard del biglietto è ${standardPrice.toFixed(2)} € <br>Essendo over 65 il costo del tuo biglietto è di ${overPrice.toFixed(2)} € `);
//         // let overPrice = (travelDistance * 0.21) / 100 * 60;

//     }
//     else {
//         // console.log(`Il prezzo del tuo biglietto è ${standardPrice}`)
//         // document.getElementById("travelSummary").innerHTML = (`Il costo del tuo del biglietto è ${standardPrice.toFixed(2)} € `)
//     }
// }

const calcolate_button_el = document.querySelector("#calcolate-button");
// console.log(calcolate_button_el);

calcolate_button_el.addEventListener(
    "click",
    function () {
        const travelDistance = document.getElementById("km-distance").value;
        const userAge = document.getElementById("age").value;
        const userNameComplete = document.getElementById("name-surname").value;
        const costPerKm = 0.21;
        const standardPrice = travelDistance * costPerKm;
        // console.log(`Il prezzo del biglietto è ${standardPrice.toFixed(2)} €`);
        document.getElementById("name-user").innerHTML = userNameComplete;

        // SE i dati inseriti non sono validi, messaggio di errore 
        if (isNaN(userAge) || isNaN(travelDistance)) {
            alert(`I valori inseriti non sono validi.  Ricaricare la pagina e riprovare`);
        } else {
            // PREZZO SCONTATO DEL 20% PER GLI UNDER 18
            if (userAge < 18) {
                let discountUnder = standardPrice * .2;
                let underPrice = standardPrice - discountUnder;

                // METTERE GLI ELEMENTI A SCHERMO 
                document.getElementById("type-of-ticket").innerHTML = "Under 18 (20% sconto)";
                document.getElementById("price-ticket").innerHTML = `${underPrice.toFixed(2)} €`;
                // CONSOLE LOG
                console.log(`Il prezzo scontato per i minorenni è: ${underPrice.toFixed(2)} €`);
            } else if (userAge >= 65) {
                // PREZZO SCONTATO DEL 40% PER GLI OVER 65
                let discountOver = standardPrice * .4;
                let overPrice = standardPrice - discountOver;

                // METTERE GLI ELEMENTI A SCHERMO 
                document.getElementById("type-of-ticket").innerHTML = "Over 65 (40% sconto)";
                document.getElementById("price-ticket").innerHTML = `${overPrice.toFixed(2)} €`;


                // CONSOLE LOG
                console.log(`Il prezzo scontato per gli over 65 è: ${overPrice.toFixed(2)} €`);

            } else {
                // METTERE GLI ELEMENTI A SCHERMO 
                document.getElementById("type-of-ticket").innerHTML = "Biglietto Standard";
                document.getElementById("price-ticket").innerHTML = `${standardPrice.toFixed(2)} €`;



                // CONSOLE LOG
                console.log(`Il costo del biglietto è: ${standardPrice.toFixed(2)} `);
            }

        }

    }
)
