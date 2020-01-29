// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const txt = document.querySelector("h2");

const superEventHandler = {
  mouseover: () => {
    txt.style.color = colors[0];
    txt.innerHTML = "The mouse is here!";
  },
  mouseout: () => {
    txt.style.color = colors[1];
    txt.innerHTML = "The mouse is gone!";
  },
  resize: () => {
    txt.style.color = colors[2];
    txt.innerHTML = "You just resized!";
  },
  click: () => {
    txt.style.color = colors[4];
    txt.innerHTML = "That was a right click!";
  }
};
txt.addEventListener("mouseover", superEventHandler.mouseover);
txt.addEventListener("mouseout", superEventHandler.mouseout);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.click);
