const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group"); // Selecting the container for the buttons

yesBtn.addEventListener("click", () => {
  question.innerHTML = "LESSGOOO see you at rsi ;)";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  btnGroup.style.display = "none"; // Hides the button group
});
