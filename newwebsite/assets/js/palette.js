var currentPalette = sessionStorage.getItem("palette");
const palettes = ['curiosities', 'cherrymelon', 'en4', 'cherryfiz'];
if (currentPalette == null) {
    var index = Math.floor(Math.random()*palettes.length);
    var palette = palettes[index];
    updateColorPalette(palette);
} else {
    updateColorPalette(currentPalette);
}

function setColors(outline, box, background, highlight) {
    var root = document.querySelector(':root');
    root.style.setProperty('--outline-color', outline);
    root.style.setProperty('--box-color', box);
    root.style.setProperty('--background-color', background);
    root.style.setProperty('--background-highlight-color', highlight);
}

function updateColorPalette(palette) {
    switch(palette) {
        case 'curiosities':
            setColors('#ff6973', '#ffeecc', '#46425e', '#00b9be');
        break;
        case 'cherrymelon':
            setColors('#ff4d6d', '#fcdeea', '#012824', '#66c582');
        break;
        case 'en4':
            setColors('#e5b083', '#fbf7f3', '#20283d', '#45b087');
        break;
        case 'cherryfiz':
            setColors('#ed2443', '#f3ecdd', '#0d0a19', '#58b6ef');
        break;
        default:
        return;
    }
    sessionStorage.setItem("palette", palette);
}