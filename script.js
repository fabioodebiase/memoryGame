let cardContainer = document.querySelector(".cards-container")
let cardData = getData()

cardGenerator(cardData)
//Generazione dati della card (immagine e nome)

function getData(){
    let data = 
    [
        {imgSrc : "https://nientepopcorn.b-cdn.net/film-img/pulp-fiction-680-locandina.jpg", name:"img1"},
        {imgSrc : "https://nientepopcorn.b-cdn.net/film-img/pulp-fiction-680-locandina.jpg", name:"img1"},
        {imgSrc : "https://nientepopcorn.b-cdn.net/film-img/inception-27205-locandina.jpg", name:"img2"},
        {imgSrc : "https://nientepopcorn.b-cdn.net/film-img/inception-27205-locandina.jpg", name:"img2"},
        {imgSrc : "https://nientepopcorn.b-cdn.net/film-img/fight-club-550-locandina.jpg", name:"img3"},
            { imgSrc: "https://nientepopcorn.b-cdn.net/film-img/fight-club-550-locandina.jpg", name: "img3" },
            { imgSrc: "https://nientepopcorn.b-cdn.net/film-img/avatar-19995-locandina.jpg", name: "img4" },
            { imgSrc: "https://nientepopcorn.b-cdn.net/film-img/avatar-19995-locandina.jpg", name: "img4" },
            { imgSrc: "https://nientepopcorn.b-cdn.net/film-img/kill-bill-vol-1-24-locandina.jpg", name: "img5" },
            { imgSrc: "https://nientepopcorn.b-cdn.net/film-img/kill-bill-vol-1-24-locandina.jpg", name: "img5" },
            { imgSrc: "https://i.ebayimg.com/images/g/leYAAOSwQjdihzTD/s-l1200.jpg", name: "img6" },
            { imgSrc: "https://i.ebayimg.com/images/g/leYAAOSwQjdihzTD/s-l1200.jpg", name: "img6" },
            { imgSrc: "https://www.warnerbros.it/wp-content/uploads/2022/01/The-Batman_Poster-Italia.jpg", name: "img7" },
            { imgSrc: "https://www.warnerbros.it/wp-content/uploads/2022/01/The-Batman_Poster-Italia.jpg", name: "img7" },
            { imgSrc: "https://nientepopcorn.b-cdn.net/film-img/up-14160-locandina.jpg", name: "img8" },
            { imgSrc: "https://nientepopcorn.b-cdn.net/film-img/up-14160-locandina.jpg", name: "img8" }
        ]
    return data
}


//funzione per randomizzare le carte
function randomCard(element) {
    element.sort(() => Math.random() - 0.5)
    return element
}

//funzione per generare in html le carte

function cardGenerator(element) {
    element = randomCard(element)  //richiamo la funzione per randomizzare
    element.forEach(item => {
        //genero HTML
        let card = document.createElement("div");
        let front = document.createElement("img");
        let back = document.createElement("div");
        let cardImg = document.createElement("img");
        //Assegno ad ogni elemento la classe
        card.classList = 'cards';
        front.classList = 'front';
        back.classList = 'back';

        //Inserisco le card nel container
        cardContainer.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        back.appendChild(cardImg)

        //applico le info alla carta
        cardImg.src = item.imgSrc
        card.setAttribute('name', item.name)

        //event listener per animazione sulla carta
        card.addEventListener('click', function () {

            card.classList.add("flipped")
            matchCard(card)



        })


    });

}

function matchCard(x) {
    
        // Aggiungi la classe "isflipped" alla carta cliccata
        x.classList.add("isFlipped");

        // Seleziona tutte le carte attualmente "isflipped"
        let flippedCards = document.querySelectorAll(".isFlipped");
    
        // Ritarda l'operazione per dare tempo al DOM di aggiornarsi
        setTimeout(function() {

            // Verifica se ci sono esattamente due carte "isflipped"
            if (flippedCards.length === 2) {
                // Controlla se le due carte hanno lo stesso valore per l'attributo "name"
                if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
                    // Se le carte corrispondono, impedisci ulteriori clic su di esse

                    
                    setTimeout(function() {
                        flippedCards.forEach(card => {
                            card.style.backgroundColor = "lightgreen";  // Colore per carte corrette
                            card.style.pointerEvents = "none"
                            card.classList.remove("isFlipped")
                        });
                    }, 1000); // Aggiungi il colore verde dopo 1 secondo

                } else {
                    // Se le carte non corrispondono, rimuovi la classe "isflipped" e "flipped" per girarle di nuovo
                    setTimeout(function() {
                        flippedCards.forEach(card => {
                            card.classList.remove("isFlipped")
                            card.classList.remove("flipped")
                        });
                    }, 1000); // Ritarda la rimozione di 1 secondo
                }
            }
        }, 0); // Ritarda di 0 millisecondi per garantire che il DOM sia aggiornato
}
