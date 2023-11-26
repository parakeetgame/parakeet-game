const redSquare = document.getElementById('redSquare');
const gameContainer = document.getElementById('gameContainer');

gameContainer.addEventListener('mousemove', (e) => {
    const containerRect = gameContainer.getBoundingClientRect();

    const mouseX = e.clientX - containerRect.left - redSquare.clientWidth / 2;
    const mouseY = e.clientY - containerRect.top - redSquare.clientHeight / 2;

    redSquare.style.left = mouseX + 'px';
    redSquare.style.top = mouseY + 'px';
});
