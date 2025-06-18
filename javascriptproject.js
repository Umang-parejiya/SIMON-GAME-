

// SIMON GAME  

let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game started");
    started = true;

        
        levelUp();
    }
});

function gameFlash(btn) {
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash")
 },250)
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash")
    },250)
   }

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

        let randIdx = Math.floor(Math.random() * 3 )
        let randCol = btns[randIdx];
        let randBtn = document.querySelector(`.${randCol}`)
        
        gameSeq.push(randCol);
        console.log(gameSeq);
        gameFlash(randBtn);
}

function checkBtn(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
    } else {
    h2.innerHTML = `game over! your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundcolor="yellow";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor="white"; 
        },150)
    reset();

    }

}

function btnPress() {
   
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkBtn(userSeq.length-1);
}


    let allBtn = document.querySelectorAll(".btn")
    for(btn of allBtn){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}