const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group"); // Selecting the container for the buttons

let buttonsDisabled = false; // Flag to keep track of button disablement

yesBtn.addEventListener("click", () => {
  if (!buttonsDisabled) {
    question.innerHTML = "LESSGOO see you at 7 at rsi ;)";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    btnGroup.style.display = "none"; // Hides the button group
    buttonsDisabled = true; // Disables button functionality

    // Displace the "No" button immediately
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }
});

noBtn.addEventListener("click", () => {
  // No functionality after the "Yes" button is clicked
  if (!buttonsDisabled) {
    // Placeholder code or any functionality you might want
  }
});

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }
});
