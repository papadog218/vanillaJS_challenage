// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const BODY = document.querySelector("body");
const H2 = document.querySelector("h2");
const BASE_WIDTH = 700;
BODY.style.backgroundColor = "#9b59b6";
H2.style.color = "#fff";

function handleResize() {
  let resizeWidth = window.innerWidth;

  if (resizeWidth <= BASE_WIDTH - 200) {
    BODY.style.backgroundColor = "#3498db";
  } else if (resizeWidth >= BASE_WIDTH + 300) {
    BODY.style.backgroundColor = "#f1c40f";
  } else {
    BODY.style.backgroundColor = "#9b59b6";
  }
}

window.addEventListener("resize", handleResize);
