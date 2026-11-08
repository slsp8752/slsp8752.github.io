/*
- use decimals or hundreds for pride for less overlapping numbers
- mobile menu
- mobile ui sizing
- loading spinner for home galleries
- project detail view
- generic project page with a query param?
- home page text content
- nav links
    - home, projects, career, favorite things 
*/

var iso = new Isotope( '.grid', {
  itemSelector: '.gallery-image',
  masonry: {
    columnWidth: 160,
    fitWidth: true,
  },
    getSortData: {
        pride: function(itemElem) {
            return parseInt(Math.abs(itemElem.dataset.pride-10));
        },
        date: function (itemElem) {
            return Date.parse(itemElem.dataset.date);
        }
    }
});

sortType = "date";
projects = [];
tags = [];

function sortBy(e) {
    sortType = e.target.value;
    updateLabels(sortType);
    iso.arrange({
        sortAscending: sortType !== 'date',
        sortBy: sortType
    });
}

function setFilter(checkboxName) {
    const checkbox = document.getElementById(checkboxName);
    // handle checkbox juggling
    if (checkbox.checked) {
        if(checkboxName == 'all') {
            tags.forEach(tag=> {
                document.getElementById(tag.toLowerCase().replace(' ', '-')).checked = false;
            })
        } else {
            document.getElementById('all').checked = false;
        }
    } else {
        if(checkboxName == 'all') {
            document.getElementById('all').checked = true;
            return;
        }
        if(tags.every(tag=>document.getElementById(tag.toLowerCase().replace(' ', '-')).checked == false)) {
            document.getElementById('all').checked = true;
        }
    }
    // sort images
    const checkboxes = Array.from(document.getElementsByClassName('filter-checkbox'));
    const activeTags = [];

    checkboxes.forEach(checkbox => {
        let checkboxId = checkbox.id;
        if(checkbox.checked) {
            activeTags.push(checkboxId);
        }
    });
    iso.arrange({
        filter: function( itemElem ) {
            return activeTags.includes('all') || Array.from(itemElem.classList).some(c => activeTags.includes(c));
        },
        sortBy: sortType,
        sortAscending: sortType !== 'date'
    });
}

function updateLabels(sortType) {
    var images = document.getElementsByClassName("gallery-image");
    Array.from(images).forEach(image => {
        var label = image.getElementsByClassName("project-meta")[0];
        label.innerText = "";
        if(sortType === "pride") {
            label.innerText = `${image.dataset[sortType]}/10`
        } else if(sortType === "random") {
            label.innerText = "";
        } else {
            label.innerText = image.dataset[sortType];
        }
    });
}

fetch('../../projects.json')
    .then(response => response.json())
    .then(data => {
        const elems = [];
        data.projects.forEach(project => {
            projects.push(project);
            var container = document.createElement("div");
            container.classList.add("gallery-image");
            container.classList.add("grid-item");
            container.classList.add("image-container");
            var img = document.createElement("img");
            img.classList.add("labelled-image");
            img.src = project.image;
            project.tags.forEach(tag=> {
                container.classList.add(tag.toLowerCase().replace(' ', '-'));
                if(!tags.includes(tag)) {
                    tags.push(tag);
                }
            });
            container.dataset.pride = project.pride;
            container.dataset.date = project.date;
            var meta = document.createElement("span");
            var descCont = document.createElement("div");
            var desc = document.createElement("p");
            descCont.classList.add("project-desc");
            desc.innerText = project.title;
            descCont.appendChild(desc);
            meta.classList.add("project-label");
            meta.classList.add("project-meta");
            meta.innerText = project.date;
            // container.appendChild(title);
            container.appendChild(meta);
            container.appendChild(img);
            container.appendChild(descCont);
            var gallery = document.getElementById("gallery");
            gallery.style.visibility = "hidden";
            gallery.appendChild(container);
            elems.push(container);
            
        });

        function createCheckbox(name, checked=false) {
            const galleryControls = document.getElementById("gallery-filters");
            var div = document.createElement("div");
            var capitalizedTag = name.charAt(0).toUpperCase() + name.slice(1);
            var input = document.createElement("input");
            input.id = name.toLowerCase().replace(' ', '-');
            input.onchange = function(){setFilter(name.toLowerCase().replace(' ', '-'))};
            input.classList.add('filter-checkbox');
            input.autocomplete = "off";
            input.type = "checkbox";
            input.checked = checked;

            var label = document.createElement("label");
            label.htmlFor = name.toLowerCase().replace(' ', '-');
            label.innerHTML = capitalizedTag;
            label.classList.add('filter-label');
            
            div.appendChild(input);
            div.appendChild(label);
            galleryControls.appendChild(div);
        }

        createCheckbox('all', true);
        tags.forEach(tag => {
            createCheckbox(tag);
        });
        iso.addItems( elems );
        // https://stackoverflow.com/questions/11071314/javascript-execute-after-all-images-have-loaded
        Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
            iso.arrange({
                sortAscending: sortType !== 'date',
                sortBy: sortType
            });
            document.getElementById('gallery').style.visibility = "visible";
            document.getElementsByClassName("loading")[0].style.display = "none";
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
