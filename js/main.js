const btns = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");
let rightDegry = 90;

function removeClass(arr) {
    arr.forEach((item) => {
        if(item.classList.contains("active-btn")) item.classList.remove("active-btn");
        if(item.classList.contains("active-content")) item.classList.remove("active-content");
    });
};

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(event) {
        removeClass(btns);
        removeClass(contents);
        event.target.classList.add("active-btn");
        contents[i].classList.add("active-content");
    });
};

setInterval(() => {
    document.querySelector(".square").style.transform = "rotate(" + rightDegry + "deg)";
    rightDegry += 90;
    if(rightDegry > 360) rightDegry = 90;
}, 2000);

window.addEventListener("load", () => {
    document.querySelector(".logo").style.transform = "rotate(45deg)";
    document.querySelector(".block").style.transform = "rotate(-45deg)";
    document.querySelector(".primary-title").style.transform = "scale(1)";;
});