

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
            let weapon = btn.className.substring(4);
            setTimeout(()=>{
                
                //update Images
                pHand.src = `./img/${weapon}Left.png`
            },900);
            //손 흔들기 애니메이션
            pHand.style.animation="shakePlayer 1s ease";
            cHand.style.animation="shakeComputer 1s ease";
            
            
        });
    });

    
    

};

//1. 게임 시작 버튼 누름
//1.1 display 설정
//2. 가위바위보 선택
//2.1 손 흔들기
//2.2 컴퓨터 랜덤으로 가위바위보
//
//3. 다시하기 