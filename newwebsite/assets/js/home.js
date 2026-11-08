function addProjectContainer(parentContainer, project) {
    var container = document.createElement("div");
    container.classList.add("image-container-tall");
    container.classList.add("grid-item");
    var img = document.createElement("img");
    img.classList.add("unlabelled-image");
    img.src = project.image;
    var descCont = document.createElement("div");
    var desc = document.createElement("p");
    descCont.classList.add("project-desc");
    desc.innerText = project.title;
    descCont.appendChild(desc);
    container.appendChild(img);
    container.appendChild(descCont);
    parentContainer.appendChild(container);
}

function newColorPalette(e) {
    const palette = e.target.value;
    updateColorPalette(palette);
}

var currentPalette = sessionStorage.getItem("palette");
let palSel = document.getElementById('palette-select');
palSel.value = currentPalette;


fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        // add recent projects
        var recentContainer = document.getElementById("recent-projects");
        const projectsToDisplay = 5;
        var projectCount = 0;
        data.projects.sort((a, b) => new Date(b.date) - new Date(a.date));
        data.projects.forEach(project => {
            if(projectCount > projectsToDisplay) {
                return;
            }
        addProjectContainer(recentContainer, project);
        projectCount++;
        });
        // add highlighted projects
        var highlightedContainer = document.getElementById("highlighted-projects");
        var highlightedProjects = data.projects.filter(project => project.highlight != null);
        highlightedProjects.sort((a,b) => a.highlight > b.highlight);
        highlightedProjects.forEach(project => {
            addProjectContainer(highlightedContainer, project);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));