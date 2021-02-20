const userForm = document.querySelector(".userName-js"),
    userInput = userForm.querySelector("input"),
    userText = userForm.querySelector("h2");

const userName = localStorage.getItem("userName");  

function saveName(text){
    localStorage.setItem("userName", text);
}

function loadUserName(){
    const delBtn = document.createElement("button");    
    delBtn.innerText = "❌";
    userInput.classList.add("hiding");
    userText.innerHTML = `안녕하세요 ${userName}님`;
    userText.appendChild(delBtn);
}

function delLocalStorage(event){
    event.preventDefault();
    localStorage.removeItem("userName");
    location.reload();
    inputText();
}

function inputText(event){
    event.preventDefault();
    const currentValue = userInput.value;
    const delBtn = document.createElement("button");    
    delBtn.innerText = "❌";
    saveName(currentValue);
    userInput.classList.add("hiding");
    userText.innerHTML = `안녕하세요 ${currentValue}님`;
    userText.appendChild(delBtn);
}

function init(){
    if(userName){
        loadUserName();
    }else {
        userForm.addEventListener("submit", inputText);
    }
    userText.addEventListener("click", delLocalStorage);
}

init();