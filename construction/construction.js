const text = document.querySelector(".animated");
const docBody = document.body;

let char = 0;
let textLength = 0;
let timer = null;

window.onload = beginFade;

function beginFade() {
  const splitText = text.textContent.split("");
  text.textContent = "";
  char = 0;
  textLength = splitText.length;

  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }
  timer = setInterval(onTick, 50);
}

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  span.onclick = spanOnClick;
  span.ondblclick = spanOnDblClick;
  char++;
  if (char === textLength) {
    complete(timer);
    return;
  }
}

function unFadeAllSpan() {
  const spanList = text.querySelectorAll("span");
  for (let sp of spanList) {
    sp.classList.remove("fade");
  }
}

function bodyOnClick(e) {
  console.log("body click");
  timer = setInterval(onTick, 50);
  docBody.onclick = null;
}

function spanOnClick(e) {
  console.log(`span ${e.target.innerText} clicked`);
  e.target.classList.remove("fade");
}

function spanOnDblClick(e) {
  console.log(`span ${e.target.innerText} double clicked`);
  unFadeAllSpan();
}

function complete(t) {
  clearInterval(t);
  t = null;
  char = 0;
}
