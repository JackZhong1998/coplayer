let score = 0;

document.getElementById('scoreButton').addEventListener('click', function() {
    score++;
    document.getElementById('score').textContent = score;
});
