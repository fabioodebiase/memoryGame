let cards = document.querySelectorAll(".cards-container .cards");

cards.forEach(item => {
    item.addEventListener('click', function() {
        item.classList.toggle('flipped');
    });
});
