console.warn('Temporary redirected');
//window.location.href = "./construction/construction.html";

const sections = document.querySelectorAll('section');
//console.log(sections);
const bubble = document.querySelector(".bubble");
const gradients = [
    "linear-gradient(to right top,  grey, tomato)",
    "linear-gradient(to right top,  tomato, olive)",
    "linear-gradient(to right top, teal, rgb(60, 44, 131))",
]

const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
            bubble.style.borderRadius = '15px 50px';
        }
    })
}

sections.forEach(section => {
    observer.observe(section);
})