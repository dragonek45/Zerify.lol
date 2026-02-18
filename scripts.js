const title = document.getElementById("title");
const textElement = document.getElementById("text");

const originalText = " Zerify.lol";
const hoverText = "Zerify.lol";

let isAnimating = false;

function deleteText(callback) {
  let text = textElement.textContent;

  function deleting() {
    if (text.length > 0) {
      text = text.slice(0, -1);
      textElement.textContent = text;
      setTimeout(deleting, 50);
    } else {
      if (callback) callback();
    }
  }

  deleting();
}

function typeText(text, callback) {
  let i = 0;

  function typing() {
    if (i < text.length) {
      textElement.textContent += text[i];
      i++;
      setTimeout(typing, 80);
    } else {
      if (callback) callback();
    }
  }

  typing();
}

title.addEventListener("mouseenter", () => {
  if (isAnimating) return;
  isAnimating = true;

  deleteText(() => {
    typeText(hoverText, () => {
      isAnimating = false;
    });
  });
});

title.addEventListener("mouseleave", () => {
  if (isAnimating) return;
  isAnimating = true;

  deleteText(() => {
    typeText(originalText, () => {
      isAnimating = false;
    });
  });
});
