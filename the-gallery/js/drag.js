const dragOrder = [];
const BASE_Z = 100;
const originalTransforms = new Map();

function snapshotOriginals() {
  document.querySelectorAll(".wobble").forEach(el => {
    Array.from(el.children).forEach(childEl => {
      if(!childEl.classList.contains("draggable")) {
        childEl.classList.add("draggable");
      }
      if (!originalTransforms.has(childEl)) {
        originalTransforms.set(childEl, childEl.style.transform);
        childEl.dataset.originalZIndex = childEl.style.zIndex; // snapshot original z-index
      }
    });
  });
}

function resetAll() {
  document.querySelectorAll(".wobble").forEach(el => {
    Array.from(el.children).forEach(childEl => {
      const original = originalTransforms.get(childEl);
      if (original !== undefined) {
        childEl.style.transform = original;
        childEl.dataset.originalScale = (original.match(/scale\(([\d.-]+)\)/) || [])[1] || '1';
      }
    });

  });
    dragOrder.forEach(el => {
    el.style.zIndex = el.dataset.originalZIndex || BASE_Z;
    });
    dragOrder.length = 0;
}

function bringToFront(el) {
  const i = dragOrder.indexOf(el);
  if (i !== -1) dragOrder.splice(i, 1);
  dragOrder.push(el);
  dragOrder.forEach((el, index) => {
    el.style.zIndex = BASE_Z + index;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  snapshotOriginals();

  const observer = new MutationObserver((mutations) => {

    document.querySelectorAll(".wobble").forEach(el => {
      Array.from(el.children).forEach(childEl => {
      if (childEl.style.display !== "none" && !childEl.dataset.dragInit) {
        snapshotOriginals();
        childEl.dataset.dragInit = "true";
        dragElement(childEl);
        childEl.addEventListener("dblclick", (e) => {
          e.preventDefault();
          if(childEl.classList.contains("embla__next")||childEl.classList.contains("embla__prev")||childEl.classList.contains("image-div")||childEl.tagName==="IMG") {
            return;
          }
          const currentScale = (childEl.style.transform.match(/scale\(([\d.-]+)\)/) || [])[1] || '1';
          const originalScale = childEl.dataset.originalScale;
          const newScale = currentScale === originalScale ? parseFloat(originalScale) * 1.7 : originalScale;
          setScale(childEl, newScale, e);
        });

        childEl.addEventListener("touchend", (e) => {
          const now = Date.now();
          if (now - lastTap < 300) {
            e.preventDefault();
            const currentScale = (childEl.style.transform.match(/scale\(([\d.-]+)\)/) || [])[1] || '1';
            const originalScale = childEl.dataset.originalScale;
            const newScale = currentScale === originalScale ? parseFloat(originalScale) * 1.4 : originalScale;
            setScale(childEl, newScale, e);
          }
          lastTap = now;
        });
      }
      })

    });
  });

  document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
  }, { passive: false });

    observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"]
    });
});

let lastTap = 0;

function setScale(el, newScale, e) {
  const transform = el.style.transform;
  const rotateMatch = transform.match(/rotate\(([\d.-]+)deg\)/);
  const rotate = rotateMatch ? rotateMatch[1] : 0;
  const translateMatch = transform.match(/translateX\(([\d.-]+)px\)\s*translateY\(([\d.-]+)px\)/);
  const currentX = translateMatch ? parseFloat(translateMatch[1]) : 0;
  const currentY = translateMatch ? parseFloat(translateMatch[2]) : 0;
  el.style.transform = `translateX(${currentX}px) translateY(${currentY}px) scale(${newScale}) rotate(${rotate}deg)`;
  bringToFront(el);
}

function dragElement(elmnt) {
  const initialTransform = elmnt.style.transform;
  const initialScale = (initialTransform.match(/scale\(([\d.-]+)\)/) || [])[1] || '1';
  elmnt.dataset.originalScale = initialScale;
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var hasDragged = false;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    pos3 = e.clientX || e.touches[0].clientX;
    pos4 = e.clientY || e.touches[0].clientY;
    hasDragged = false;
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    document.onmousemove = elementDrag;
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    var clientX = e.clientX || e.touches[0].clientX;
    var clientY = e.clientY || e.touches[0].clientY;
    pos1 = pos3 - clientX;
    pos2 = pos4 - clientY;
    pos3 = clientX;
    pos4 = clientY;
    if (Math.abs(pos1) > 4 || Math.abs(pos2) > 4) {
      hasDragged = true;
    }
    const transform = elmnt.style.transform;
    const translateMatch = transform.match(/translateX\(([\d.-]+)px\)\s*translateY\(([\d.-]+)px\)/);
    const currentX = translateMatch ? parseFloat(translateMatch[1]) : 0;
    const currentY = translateMatch ? parseFloat(translateMatch[2]) : 0;
    const rotateMatch = transform.match(/rotate\(([\d.-]+)deg\)/);
    const rotate = rotateMatch ? rotateMatch[1] : 0;
    const scale = parseFloat((transform.match(/scale\(([\d.-]+)\)/) || [])[1] || '1');

    // Measure how much all ancestor transforms are scaling the element
    // by comparing its rendered pixel size to its natural offsetWidth
    const rect = elmnt.getBoundingClientRect();
    const ancestorScale = rect.width / (elmnt.offsetWidth * scale);

    const newX = currentX - (pos1 / ancestorScale);
    const newY = currentY - (pos2 / ancestorScale);
    elmnt.style.transform = `translateX(${newX}px) translateY(${newY}px) scale(${scale}) rotate(${rotate}deg)`;
    bringToFront(elmnt);
  }

  function closeDragElement() {
    lastTap = 333;
    document.onmouseup = null;
    document.ontouchend = null;
    document.onmousemove = null;
    document.ontouchmove = null;
    if (hasDragged) {
      elmnt.addEventListener('click', suppressClick, { capture: true, once: true });
    }
  }

  function suppressClick(e) {
    e.stopPropagation();
    e.preventDefault();
  }
}