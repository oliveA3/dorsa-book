"use strict";

const flipBook = (elBook) => {
    let currentPage = 0;
    const pages = elBook.querySelectorAll(".page");
    const totalPages = pages.length;

    elBook.style.setProperty("--c", currentPage);

    pages.forEach((page, idx) => {
        page.style.setProperty("--i", idx);
    });

    elBook.addEventListener("click", (evt) => {
        // Bloqueo manual: si el clic es en el audio, no hagas NADA
        if (evt.target.closest("audio")) {
            return;
        }

        const isBack = evt.target.closest(".back");

        if (isBack) {
            currentPage = Math.max(0, currentPage - 1);
        } else {
            currentPage = Math.min(totalPages, currentPage + 1);
        }

        elBook.style.setProperty("--c", currentPage);

        pages.forEach((page, idx) => {
            if (idx === currentPage || idx === currentPage - 1) {
                page.style.pointerEvents = "auto";
            } else {
                page.style.pointerEvents = "none";
            }
        });
    });
};

document.querySelectorAll(".book").forEach(flipBook);
