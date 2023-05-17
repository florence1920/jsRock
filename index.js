const startBtn = document.querySelector('.start');
const pHand = document.querySelector('.pHand');
const cHand = document.querySelector('.cHand');

startBtn.addEventListener('click', () => {
    console.log('click');
     //Animation
     pHand.style.animation="shakePlayer 1s ease";
     cHand.style.animation="shakeComputer 1s ease";
});
