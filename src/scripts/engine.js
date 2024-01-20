const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),
    lifes: document.querySelector("#lifes"),
  },
  values: {
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    curretTime: 0,
    maxLifes: 10,
  },
  actions: {
    timerId: setInterval(randomSquare, 1000),
    countDownTimerId: setInterval(countDown, 1000),
  },
};


function countDown() {
  state.values.curretTime--;
  state.view.timeLeft.textContent = state.values.curretTime;

  if (state.values.curretTime <= 0) {
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);
    // alert("Game Over! O seu resultado foi: " + state.values.result);
    exibirPopUp();
  }
}

function playSound(audioName) {
  let audio = new Audio(`./src/audios/${audioName}.m4a`);
  let trilhaSonora = new Audio (`./src/audios/${audioName}.m4a`);
  audio.volume = 0.2;
  audio.play();
}

function randomSquare() {
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });

  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add("enemy");
  state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === state.values.hitPosition) {
        state.values.result++;
        state.view.score.textContent = state.values.result;
        state.values.lifes ++;
        state.values.lifes ++;
        state.view.lifes.textContent = state.values.lifes;
        state.values.hitPosition = null;
        playSound("hit");
      }if ("mousedown" != addEventListener){
       
       state.values.lifes --;
       state.view.lifes.textContent = state.values.lifes;
        
       if(state.view.lifes.textContent <= 0){
        exibirPopUp()
       

       }
      }
    });
  });
}





function initialize() {
  addListenerHitBox();
  playSound("trilha-sonora");
}

initialize();

function exibirPopUp() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  // Mensagem que você deseja exibir
  var mensagem = `Game Over! 
  O seu resultado 
  foi:` + state.values.result;
  document.getElementById("mensagemPopUp").textContent = mensagem;
}

// Função para fechar o pop-up
function fecharPopUp() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
function ModoFacil(){
  fecharPopUp();
  clearInterval(state.actions.countDownTimerId);
  clearInterval(state.actions.timerId);
  state.values.curretTime = 60;
  state.values.lifes = state.values.maxLifes; 
  state.view.lifes.textContent = state.values.lifes;
  state.view.timeLeft.textContent = state.values.curretTime;
  state.actions.timerId = setInterval(randomSquare, 700);
  state.actions.countDownTimerId = setInterval(countDown, 1000);
  
  
}
function ModoDificil(){
  fecharPopUp();
  clearInterval(state.actions.countDownTimerId);
  clearInterval(state.actions.timerId);
  state.values.curretTime = 60; 
  state.values.lifes = state.values.maxLifes; 
  state.view.lifes.textContent = state.values.lifes;
  state.view.timeLeft.textContent = state.values.curretTime;
  state.actions.timerId = setInterval(randomSquare, 500);
  state.actions.countDownTimerId = setInterval(countDown, 1000);
  
  
}

function ModoProfissional(){
  fecharPopUp();
  clearInterval(state.actions.countDownTimerId);
  clearInterval(state.actions.timerId);
  state.values.curretTime = 60; 
  state.values.lifes = state.values.maxLifes; 
  state.view.lifes.textContent = state.values.lifes;
  state.view.timeLeft.textContent = state.values.curretTime;
  state.actions.timerId = setInterval(randomSquare, 400);
  state.actions.countDownTimerId = setInterval(countDown, 1000);
  
  
}



function resetar(){
  location.reload();
 
}

function exibirPopUp() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "block";

  // Mensagem que você deseja exibir
  var mensagem = `Game Over! 
  O seu resultado 
  foi:` + state.values.result;
  document.getElementById("mensagemPopUp").textContent = mensagem;
}
function fecharPopUp() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "none";
}
