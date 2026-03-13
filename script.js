"use strict";

const flipBook = (elBook) => {
    elBook.style.setProperty("--c", 0);
    elBook.querySelectorAll(".page").forEach((page, idx) => {
        page.style.setProperty("--i", idx);
        page.addEventListener("click", (evt) => {
            const isFront = evt.target.closest(".front") !== null;
            const isBack = evt.target.closest(".back") !== null;

            if (isFront) {
                elBook.style.setProperty("--c", idx + 1);
            } else if (isBack) {
                elBook.style.setProperty("--c", idx);
            }
        });
    });
};

document.querySelectorAll(".book").forEach(flipBook);
