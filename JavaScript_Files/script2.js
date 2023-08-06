const button = document.querySelector('#submit');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    console.log('button clicked');
    jsConfetti.addConfetti();
});