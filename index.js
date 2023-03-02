const pages = document.querySelectorAll('.page');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const audio = document.querySelector('audio');
let page = 0;

const paging = () => {
    pages.forEach((pageEle, idx) => {
        pageEle.style.display = idx === page ? 'block' : 'none';
    });

    playMusic();
    hideNextButton();
    hidePrevButton();
};

const nextPage = () => {
    page = Math.min(pages.length - 1, page + 1);
    paging();
};

const prevPage = () => {
    page = Math.max(0, page - 1);
    paging();
};

const hideNextButton = () => {
    next.style.display = pages.length - 1 === page ? 'none' : 'block';
};

const hidePrevButton = () => {
    prev.style.display = page > 0 ? 'block' : 'none';
};

const playMusic = () => {
    if (page !== 1) return;

    audio.play();
};

const init = () => {
    paging();
    next.addEventListener('click', nextPage);
    prev.addEventListener('click', prevPage);
};

init();
