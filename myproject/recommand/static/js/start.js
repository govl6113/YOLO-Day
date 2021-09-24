const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const ENDPOINT = 12; //질문갯수
const select = [];

function goResult() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450);
  });
}

function addAnswer(answerText, qIdx) {
  const a = document.querySelector(".answerBox");
  const answer = document.querySelector("button");
  answer.classList.add("answerList");
  answer.classList.add("fadeIn");

  /**
   *
   * answer.classList.add('my-3) // margin 3
   */

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    function () {
      const chileren = document.querySelectorAll(".answerList");
      for (let i = 0; i < chileren.length; i++) {
        chileren[i].disabled = true;
        chileren[i].style.WebkitAnimation = "fadeOut 0.5s";
        chileren[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        for (let i = 0; i < chileren.length; i++) {
          chileren[i].style.display = "none";
        }
        goNext(++qIdx);
      }, 450);
    },
    false
  );
}

function goNext(qIdx) {
  if (qIdx + 1 === ENDPOINT) {
    goResult();
    return;
  }
  const q = document.querySelector("qBox");
  q.innerHTML = qnaList[0].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
  const status = document.querySelector(".statusBar");
  status.style.width = (100 / ENDPOINT) * (qIdx + 1) + "%";
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
