let cardContainer = document.querySelector(".cards-container")
let cardData = getData()
cardGenerator(cardData)
//Generazione dati della card (immagine e nome)

function getData(){
    let data = 
    [
        {imgSrc : "./imgs/img1.jpeg", name:"img1"},
        {imgSrc : "./imgs/img1.jpeg", name:"img1"},
        {imgSrc : "./imgs/img2.jpeg", name:"img2"},
        {imgSrc : "./imgs/img2.jpeg", name:"img2"},
        {imgSrc : "./imgs/img3.jpeg", name:"img3"},
        {imgSrc : "./imgs/img3.jpeg", name:"img3"},
        {imgSrc : "./imgs/img4.jpeg", name:"img4"},
        {imgSrc : "./imgs/img4.jpeg", name:"img4"},
        {imgSrc : "./imgs/img5.jpeg", name:"img5"},
        {imgSrc : "./imgs/img5.jpeg", name:"img5"},
        {imgSrc : "./imgs/img6.jpeg", name:"img6"},
        {imgSrc : "./imgs/img6.jpeg", name:"img6"},
        {imgSrc : "./imgs/img7.jpeg", name:"img7"},
        {imgSrc : "./imgs/img7.jpeg", name:"img7"},
        {imgSrc : "./imgs/img8.jpeg", name:"img8"},
        {imgSrc : "./imgs/img8.jpeg", name:"img8"}    
    ]
    return data
}


//funzione per randomizzare le carte
function randomCard(element){
    element.sort(() => Math.random() - 0.5)
    return element   
}

//funzione per generare in html le carte

function cardGenerator(element){
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
        card.setAttribute('name' , item.name)
        
        //event listener per animazione sulla carta
        card.addEventListener('click', function(){
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
