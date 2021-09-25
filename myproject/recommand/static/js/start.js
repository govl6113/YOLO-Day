const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const ENDPOINT = 12; //질문갯수
const select = [
  { value: 0, key: 0 },
  { value: 0, key: 1 },
  { value: 0, key: 2 },
  { value: 0, key: 3 },
  { value: 0, key: 4 },
  { value: 0, key: 5 },
  { value: 0, key: 6 },
  { value: 0, key: 7 },
  { value: 0, key: 8 },
  { value: 0, key: 9 },
  { value: 0, key: 10 },
  { value: 0, key: 11 },
  { value: 0, key: 12 },
  { value: 0, key: 13 },
  { value: 0, key: 14 },
  { value: 0, key: 15 },
  { value: 0, key: 16 },
  { value: 0, key: 17 },
];

function calResult() {
  const resultArray = select.sort(function (a, b) {
    if (a.value > b.value) {
      return -1;
    }
    if (a.value < b.value) {
      return 1;
    }
    return 0;
  });
  let result = [resultArray[0].key, resultArray[1].key, resultArray[2].key];
  return result;
}

function setResult() {
  const point = calResult(); //[16,9,2]

  const imgA1 = document.querySelector(".resultA1");
  const imgA2 = document.querySelector(".resultA2");
  const imgA3 = document.querySelector(".resultA3");

  const resultImg1 = document.createElement("img");
  const resultImg2 = document.createElement("img");
  const resultImg3 = document.createElement("img");

  const imgURL1 = "static/img/image-" + point[0] + ".png";
  const imgURL2 = "static/img/image-" + point[1] + ".png";
  const imgURL3 = "static/img/image-" + point[2] + ".png";

  resultImg1.src = imgURL1;
  resultImg1.alt = point[0];
  resultImg2.src = imgURL2;
  resultImg2.alt = point[1];
  resultImg3.src = imgURL3;
  resultImg3.alt = point[2];

  imgA1.appendChild(resultImg1);
  imgA2.appendChild(resultImg2);
  imgA3.appendChild(resultImg3);
}

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
    setResult();
  });
}

function addAnswer(answerText, qIdx, idx) {
  const a = document.querySelector(".answerBox");
  const answer = document.createElement("button");
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
        const target = qnaList[qIdx].a[idx].type;
        for (let i = 0; i < target.length; i++) {
          select[target[i]].value += 1;
        }
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
  console.log("goNext");
  if (qIdx === ENDPOINT) {
    goResult();
    return;
  }
  const q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
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
      qna.style.display = "flex";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
