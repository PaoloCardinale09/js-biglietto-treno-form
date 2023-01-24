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
