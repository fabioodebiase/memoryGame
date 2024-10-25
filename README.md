<h1>Memory Game 🧠</h1>

[screen-capture.webm](https://github.com/user-attachments/assets/eaa7e80a-e921-4a04-b96b-223a4b5591d4)

<span>
 Semplice implementazione del gioco di carte "Memory".
 L'obiettivo del gioco è abbinare le coppie di carte con la stessa immagine.
</span>

<span>
  Il progetto si divide in 3 file: HTML,CSS e JavaScript;
HTML: Il file principale index.html ha un container per l'interfaccia principale e uno per le carte, generate automaticamente dallo script <br>
CSS: Definisce lo stile della pagina e delle carte. Ognuna di esse ha un lato frontale e posteriore, il primo è quello che vediamo prima di girare le carte, e il secondo contiene l'immagine da accoppiare <br>
JavaScript: è il cuore del progetto, nel file sono racchiuse tutte le logiche per il gioco, implementate tramite funzioni <br>
      <ul>
        <li>getData(): viene chiamata per assegnare i dati alla carta, ovvero il link dell'immagine e il nome</li>
        <li>randomCard(): utilizzata per randomizzare la posizione delle carte nella pagina</li>
        <li>cardGenerator(): grazie a questa funzione viene creata la carta nella pagina, richiamando ad esso la funzione randomCard() e getData()</li>
        <li>matchCard(): la funzione che implementa la logica nel progetto, confrontando le carte e assegnare il colore verde al loro background se sono state accoppiate</li>
      </ul>
  
  <h2>Futuri miglioramenti</h2>
  <li>Aggiungere un contatore di mosse da poter eseguire</li>
  <li>Migliorare le animazioni</li>
  <li>Aggiungere livelli di difficoltà</li>
</span>
