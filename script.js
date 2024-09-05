let cardContainer = document.querySelector(".cards-container")

let cardData = getData()

cardGenerator(cardData)

//Generazione dati della card (immagine e nome)

function getData(){
    let data = 
    [
        {imgSrc : "https://www.madiventura.it/pages/wp-content/uploads/2019/01/fragola.png", name:"fragola"},
        {imgSrc : "https://www.laboutiquedelbiologico.it/8289-large_default/banane-biologiche-500-gr.jpg", name:"banana"},
        {imgSrc : "https://www.fruttasecca.it/wp-content/uploads/2019/06/pera_williams_02.png", name:"pera"}

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

        card.addEventListener('click', function(){
            card.classList.toggle("flipped")
        })
    });

    


}
