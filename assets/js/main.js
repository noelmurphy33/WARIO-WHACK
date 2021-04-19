$(document).ready(function () {
  //function to toggle to how to play div
  $("#howtobtn").click(function () {
    $("#intro").hide("slow");
    $(".nav-link").removeClass("active");
    $("#mainscoreboard").hide("slow");
    $("#contact").hide("slow");
    $("#howtoplay").show("slow");
    $(this).addClass("active");
  });
  //function to toggle to scoreboard div
  $("#scoreboardbtn").click(function () {
    $("#intro").hide("slow");
    $(".nav-link").removeClass("active");
    $("#howtoplay").hide("slow");
    $("#contact").hide("slow");
    $("#mainscoreboard").show("slow");
    $(this).addClass("active");
  });
  //function to toggle to contact
  $("#contactbtn").click(function () {
    $("#intro").hide("slow");
    $(".nav-link").removeClass("active");
    $("#howtoplay").hide("slow");
    $("#mainscoreboard").hide("slow");
    $("#contact").show("slow");
    $(this).addClass("active");
  });
  //function to toggle to intro
  $("#introbtn").click(function () {
    $("#contact").hide("slow");
    $(".nav-link").removeClass("active");
    $("#howtoplay").hide("slow");
    $("#mainscoreboard").hide("slow");
    $("#intro").show("slow");
    $(this).addClass("active");
  });

  //gameplay
  const gameOver = document.querySelector(".gameover");
  const pipes = document.querySelectorAll(".pipe");
  const wario = document.querySelectorAll(".wario");
  const mario = document.querySelectorAll(".mario");
  const startGameBtn = document.querySelector(".startbtn");
  const displayTimeLeft = document.querySelector("#time");
  const displayScore = document.querySelector("#score");
  const replay = document.querySelector("#playagainbtn")
  let lastPipe;
  let timeUp = false;
  let score = 0;
  let countDown;
  let timeLimit = 60000;
  //audio
  const mutePlay = document.querySelector("#mutebtn")
  const marioHit = new Audio("assets/audio/hitmario.mp3");
  const warioHit = new Audio("assets/audio/hitwario.mp3");


  function selectRandomPipe(pipes) {
    const randomPipe = Math.floor(Math.random() * pipes.length);
    const pipe = pipes[randomPipe];
    if (pipe === lastPipe) {
      return selectRandomPipe(pipes);
    }
    lastPipe = pipe;
    return pipe;
  }
  console.log(selectRandomPipe(pipes));

  function jumpOut() {
    const jumpOutTime = Math.random() * 1200 + 600;
    const warioUp = selectRandomPipe(pipes);
    const marioUp = selectRandomPipe(pipes);
    warioUp.classList.add("wariojump");
    marioUp.classList.add("mariojump");
    setTimeout(function () {
      warioUp.classList.remove("wariojump");
      marioUp.classList.remove("mariojump");
      if (!timeUp) jumpOut();
    }, jumpOutTime);
  }
  //start the game
  function startGame() {
    countDown = timeLimit/1000;
    displayScore.textContent = 0;
    displayTimeLeft.textContent = countDown;
    timeUp = false;
    score = 0;
    jumpOut();
    startGameBtn.style.display = "none";
    setTimeout(function () {
      timeUp = true;
    }, timeLimit);

    //count time left down
    let countTimeDown = setInterval(() => {
      countDown -= 1;
      displayTimeLeft.textContent = countDown;
      if (countDown < 1) {
          countDown = 0;
        clearInterval(countTimeDown);
        gameOver.style.display = "block"
      }
    }, 1000);
  }

  //increase score for hit wario and play sound
  function warioWhack(e) {
    if(mutePlay.classList.contains("fa-volume-up")){
      warioHit.play()
    }
    score++;
    displayScore.textContent = score;
    this.parentElement.classList.remove("wariojump");
  }
//decrease score for hit mario and play sound
  function marioWhack(e) {
    if(mutePlay.classList.contains("fa-volume-up")){
      marioHit.play()
    }
    if(score <= 0){
      score = 0;
      displayScore.textContent = score;
    }else
    score--;
    displayScore.textContent = score;
    this.parentElement.classList.remove("mariojump");
  }
  // toggle mute icon
  function music(){
    if(mutePlay.classList.contains("fa-volume-mute")){
    mutePlay.classList.remove("fa-volume-mute");
    mutePlay.classList.add("fa-volume-up");
  }
    else{
    mutePlay.classList.remove("fa-volume-up");
    mutePlay.classList.add("fa-volume-mute");
  }
  }
// to play again
  function playAgain(){
    gameOver.style.display = "none"
    startGame()
  }
  //event listener
  replay.addEventListener("click", playAgain)
  mutePlay.addEventListener("click", music);
  wario.forEach(wario => wario.addEventListener("click", warioWhack));
  mario.forEach(mario => mario.addEventListener("click", marioWhack));
  startGameBtn.addEventListener("click", startGame);
});
