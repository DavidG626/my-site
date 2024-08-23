


console.log("Script.js is loaded and working");

let currentMode = localStorage.getItem('mode') || 'lightmode';
const themeSwitch = document.getElementById('theme-switch');

const setMode = (mode) => {
    document.body.className = mode;
    localStorage.setItem('mode', mode);
    currentMode = mode;
}

if (currentMode) {
    setMode(currentMode);
}

themeSwitch.addEventListener("click", () => {
    switch (currentMode) {
        case 'lightmode':
            setMode('darkmode');
            break;
        case 'darkmode':
            setMode('bluemode');
            break;
        case 'bluemode':
            setMode('whitemode');
            break;
        case 'whitemode':
            setMode('lightmode');
            break
    }
});







// console.log("Script.js is loaded!");

// let darkmode = localStorage.getItem('darkmode')
// const themeSwitch = document.getElementById('theme-switch')

// const enableDarkmode = () => {
//  document.body.classList.add('darkmode')
//  localStorage.setItem('darkmode', 'active')
// }

// const disableDarkmode = () => {
//     document.body.classList.remove('darkmode')
//     localStorage.setItem('darkmode', null)
// }

// if(darkmode === "active") enableDarkmode()



// themeSwitch.addEventListener("click", () => {
//     darkmode = localStorage.getItem('darkmode')
//     darkmode !== "active" ? enableDarkmode() : disableDarkmode()
// })