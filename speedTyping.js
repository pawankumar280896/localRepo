const sentences = 
  `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`;
  
let startbtn = document.getElementById("start-btn");
startbtn.addEventListener('click', enablebtn);

let enabletext = document.getElementById("input");
let displaysentense = document.getElementById("sentence");

function enablebtn() {
    enabletext.disabled = false;
    displaysentense.textContent = sentences;
    startbtn.disabled = true;
    timerend = 30; // Reset timer
    staretTimer();
}

let timerend = 30;
let timer = document.getElementById("timer");

function staretTimer() {
    timer.textContent = "00:" + (timerend < 10 ? '0' : '') + timerend; // Show leading zero
    let start = setInterval(() => {
        timerend--;
        timer.textContent = "00:" + (timerend < 10 ? '0' : '') + timerend;
        if (timerend <= 0) {
            clearInterval(start); // Clear interval
            endGame();
        }
    }, 1000);
}

const results = document.getElementById("result");
let correctWords = 0;

function endGame() {
    timer.textContent = "00:00";
    results.style.display = "block";
    enabletext.disabled = true;
    startbtn.disabled = true;
    correctChecker();
}

const retrybtn = document.getElementById("retry-btn");
retrybtn.addEventListener('click', retryagain);

function retryagain() {
    startbtn.disabled = false;
    results.style.display = "none";
    enabletext.value = ''; // Set value instead of textContent
    enabletext.disabled = true;
    correctWords = 0; // Reset correct words count
    timerend = 30; // Reset timer
}

const speedchecker = document.getElementById("speed");
let len = 0;

function corectWordfun() {
    const userWords = enabletext.value.trim().split(/\s+/);
    const referenceWords = sentences.trim().split(/\s+/);
    
    correctWords = 0; // Reset for new calculation
    len = userWords.length; // Update length based on user input

    for (let i = 0; i < Math.min(userWords.length, referenceWords.length); i++) {
        if (userWords[i] === referenceWords[i]) {
            correctWords++;
        }
    }
}

function correctChecker() {
    corectWordfun(); // Calculate correct words
    let cal = (correctWords / 30) * 60; // Calculate speed based on 3 seconds
    speedchecker.textContent = cal.toFixed(2);

    let accuracy = document.getElementById("accuracy");
    let percentage = (correctWords / len) * 100;
    accuracy.textContent = percentage.toFixed(2);
}



		
// const sentences = 
//   `The quick brown fox jumps over the lazy dog . Sphinx of black quartz, judge my vow . Pack my box with five dozen liquor jugs . How vexingly quick daft zebras jump !`
// ;

// let currentSentenceIndex = 0;
// let startTime, endTime;
// let timerInterval;

// const sentenceElement = document.getElementById("sentence");
// const inputElement = document.getElementById("input");
// const startButton = document.getElementById("start-btn");
// const timerElement = document.getElementById("timer");
// const speedElement = document.getElementById("speed");
// const accuracyElement = document.getElementById("accuracy");
// const resultElement = document.getElementById("result");
// const retryButton = document.getElementById("retry-btn");


// function startTest() {
//   sentenceElement.innerHTML = sentences;
//   inputElement.value = "";
//   inputElement.disabled = false;
//   inputElement.focus();
//   startButton.disabled = true;
//   startTime = new Date();
//   timerInterval = setInterval(updateTimer, 1000);
//   setTimeout(endTest, 30000); // End the test after 30 seconds
// }




// function updateTimer() {
//   const currentTime = new Date();
//   const elapsedTime = Math.floor((currentTime - startTime) / 1000);
//   const remainingTime = 30 - elapsedTime;
//   const minutes = Math.floor(remainingTime / 60);
//   const seconds = remainingTime % 60;
//   timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// }




// function endTest() {
//   clearInterval(timerInterval);
//   endTime = new Date();
//   const elapsedTime = Math.floor((endTime - startTime) / 1000);
//   const typedSentence = inputElement.value.trim();
//   const correctSentence = sentenceElement.textContent.trim();
  
//   let speed = 0;
//   let typedWords = [];
//   if(typedSentence != ""){
//     typedWords = typedSentence.split(" ");
//   }
  
//   const correctWords = correctSentence.split(" ");
//   console.log(correctWords);
//   let correctCount = 0;
//   let ind =0;
//   typedWords.forEach((word, index) => {
//     if (word === correctWords[index]) {
//       correctCount++;
//       ind =index;
//     }
//   });
//   if(typedSentence != ""){
//     speed = Math.floor(((correctCount) / 30) * 60);
//   }
//   const accuracy = (correctCount / correctWords.length  ) * 100;
//   speedElement.textContent = speed;
//   accuracyElement.textContent = accuracy.toFixed(2);
//   resultElement.style.display = "block";
//   retryButton.focus();
// }




// startButton.addEventListener("click", startTest);



// retryButton.addEventListener("click", () => {
//   resultElement.style.display = "none";
//   startButton.disabled = false;
//   inputElement.value = "";
// });