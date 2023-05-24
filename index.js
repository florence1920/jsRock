

//시작하기 눌렀을 때 
function gameStart(){
    //display 설정
    const start = document.querySelector('.start');
    const ing = document.querySelector('.ing');
    start.style.display = 'none';
    ing.style.display = 'block';

    //가위바위보 게임 시작
    //가위 바위 보 선택
    const btnWrap = document.querySelectorAll('.btnWrap .btn');
    //손 흔들기
    const pHand = document.querySelector('.pHand');
    const cHand = document.querySelector('.cHand');  
    const hands = document.querySelectorAll('.rsp');
    const computerOptions = ['rock','paper','sci'];

    let pScore = 0;
    let cScore = 0;

    btnWrap.forEach( btn =>{
        btn.addEventListener("click",function(){
            //애니메이션 지워주기
            hands.forEach(hand =>{
                hand.addEventListener('animationend', function(){
                    this.style.animation='';
                });
            })
            //가위바위보 선택 확인
            //클래스 이름으로 확인 
            let pChoice = btn.className.substring(4);
            //컴퓨터 선택
            const cNumber = Math.floor(Math.random() * 3);
            const cChoice = computerOptions[cNumber];
            setTimeout(()=>{
                compare(pChoice,cChoice);
                
                //update Images
                pHand.src = `./img/${pChoice}Left.png`
                cHand.src = `./img/${cChoice}Right.png`
            },900);
            //손 흔들기 애니메이션
            pHand.style.animation="shakePlayer 1s ease";
            cHand.style.animation="shakeComputer 1s ease";
            
            
        });
    });
    // btnWrap End

    const pChar = document.querySelector('.player');
    const cChar = document.querySelector('.com');
    const stair = document.querySelector('.stair > li');

    function moveChar(){
        pChar.style.left = `${pScore}0%`
        cChar.style.left = `${cScore}4.5%`
        const pNow = document.querySelector(`.stair :nth-child(${pScore + 1})`);
        pNow.classList.add('win');
        console.log(stair);
    }
    
    function compare(pChoice,cChoice){
        if(pChoice == cChoice){
            return;
        }
        if(pChoice == 'rock'){
            if(cChoice == 'paper'){
                cScore = cScore + 3;
                moveChar();
                return;
            }else{
                pScore++;
                moveChar();
                return;
            }
        }
        if(pChoice == 'sci'){
            if(cChoice == 'paper'){
                pScore = pScore + 2;
                moveChar();
                return;
            }else{
                cScore++;
                moveChar();
                return;
            }
        }
        if(pChoice == 'paper'){
            if(cChoice == 'rock'){
                pScore = pScore + 3;
                moveChar();
                return;
            }else{
                cScore = cScore + 2;
                moveChar();
                return;
            }
        }
    }
    //compare End

    
    

};

//1. 게임 시작 버튼 누름
//1.1 display 설정
//2. 가위바위보 선택
//2.1 손 흔들기
//2.2 컴퓨터 랜덤으로 가위바위보
//
//3. 다시하기 