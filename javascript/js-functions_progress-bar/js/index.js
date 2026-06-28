console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
    const percentOfWindow = window.scrollY/(document.body.clientHeight-window.innerHeight);
    const percentage = percentOfWindow * 100 + "%";
    return percentage;
}

document.addEventListener("scroll", ()=>{
    progressBar.style.width = calculateScrollPercentage();

})


