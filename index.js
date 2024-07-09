let wrapper = document.querySelector('.wrapper');
let question = document.querySelector('.question');
let yesBtn = document.querySelector('.yes-btn');
let noBtn = document.querySelector('.no-btn');

let wrapperRect = wrapper.getBoundingClientRect();
let noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () =>{
    question.innerHTML = 'I love you too!';
});

noBtn.addEventListener('mouseover', () => {
    let i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    let j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});