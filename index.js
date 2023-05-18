const startBtn = document.querySelector('.start');
const pHand = document.querySelector('.pHand');
const cHand = document.querySelector('.cHand');

startBtn.addEventListener('click', () => {
    console.log('click');
     //Animation
     pHand.style.animation="shakePlayer 1s ease";
     cHand.style.animation="shakeComputer 1s ease";
});

//시작하기 눌렀을 때 
function gameStart(){
    //플레이어, 컴퓨터 스코어
    let pScore = 0;
    let cScore = 0;

    

};