/*
// =======================
// MATRIX RAIN
// =======================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars =
"01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 18;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#59ff4d";
    ctx.font = fontSize + "px Share Tech Mono";

    for(let i=0;i<drops.length;i++){

        const text = chars[Math.floor(Math.random()*chars.length)];

        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
            drops[i]=0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix,35);

window.onresize=()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
}
// =======================
// BOOT TERMINAL
// =======================

const terminal = document.getElementById("terminal");

const lines = [

"Initializing Kernel...",
"Loading Security Modules...",
"Scanning Memory...",
"Connecting...",
"Authenticating User...",
"",
"ACCESS GRANTED",
"",
"Opening Portfolio...",
"",
"Welcome To AliyHacker's Portfolio"

];

let line = 0;
let letter = 0;

function type(){

    if (line >= lines.length) {

        setTimeout(() => {

            const boot = document.getElementById("boot-screen");
            const wrapper = document.querySelector(".wrapper");

            boot.style.opacity = "0";

            wrapper.style.opacity = "1";
            wrapper.style.animation = "show-animate 2s forwards";

            setTimeout(() => {

                boot.style.display = "none";

                coverRight.classList.add("turn");

                setTimeout(() => {
                    coverRight.style.zIndex = -1;
                }, 700);

                pages.forEach((_, index) => {
                    setTimeout(() => {

                        reverseIndex();
                        pages[pageNumber].classList.remove("turn");

                        setTimeout(() => {
                            reverseIndex();
                            pages[pageNumber].style.zIndex = 10 + index;
                        }, 500);

                    }, (index + 1) * 200);
                });

            }, 1200);

        }, 700);

        return;
    }

    if(letter < lines[line].length){

        terminal.innerHTML += lines[line].charAt(letter);

        letter++;

        setTimeout(type,35);

    }else{

        terminal.innerHTML += "<br>";

        line++;
        letter=0;

        setTimeout(type,200);

    }

}
*/


const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {

        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 - index;
            }, 500);

        }else{
            pageTurn.classList.add('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 + index;
            }, 500);
        }
    }
});


// contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');


// create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}


// back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();

            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)

    })
}
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

coverRight.classList.add("turn");

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 700);

pages.forEach((_, index) => {
    setTimeout(() => {

        reverseIndex();
        pages[pageNumber].classList.remove("turn");

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);

    }, (index + 1) * 200);
});

//type();
