```javascript
/* ==========================================================
   TYPING.JS
========================================================== */

const words = [

    "Frontend Developer",
    "Computer Science Student",
    "JavaScript Enthusiast",
    "Problem Solver",
    "Web Developer"

];

const typingElement = document.getElementById("typing-text");

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 60;
const pauseTime = 1800;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, pauseTime);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typeEffect,
        isDeleting ? deletingSpeed : typingSpeed
    );

}

window.addEventListener("load", typeEffect);
```
