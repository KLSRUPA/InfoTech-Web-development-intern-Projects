const wordsTextarea = document.querySelector(".word-counter-container .words");
const countBtn = document.querySelector(".word-counter-container .count-btn");
const wordCount=document.querySelector(".word-counter-container .word-count span");

const countWords =() => {
    let words = wordsTextarea.Value;
    let slitWords = words.split(" ");

    let numberOfWords = splitWords.length;

    wordCount.innerHTML = numberOfWords;
};

countBtn.addEventListener("click", countWords);