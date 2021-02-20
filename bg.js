const backGroundImg = document.querySelector("body")


function paintImg(randomNb){
  backGroundImg.classList.add(`bgImg${randomNb}`);
}

function genRandomNumber(){
  const randomNumber = Math.ceil(Math.random()*3)
  return randomNumber;
}

function init(){
  const randomNumber = genRandomNumber();
  paintImg(randomNumber);
}

init();