muted = true;

$(function() { document.addEventListener('contextmenu', function(e) {
    e.stopPropagation();
  }, true); // prevent game from capturing right click
})
$(function() {
  $("head").load("game-head.html", function() {
    $("<link>", { rel: "stylesheet", href: "style.css" }).appendTo("head");
    $("#loading-screen").fadeOut(3000);
      var link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = './favicon3.ico';
    setTimeout(()=> {
        const divNames = ["welcome", "dino1", "dino2", "upstream", "stamp", "meta", "credits"];
        const slideDivs = [];
        divNames.forEach(divName => {
          slideDivs.push(document.getElementById(divName));
        });
        slideDivs.forEach(slideDiv => {
          new ResizeObserver(entries => {
          const hidden = entries[0].contentRect.width === 0;
          const fullscreenDiv = document.getElementById("fullscreen-overlay");
          const fullScreenHidden = fullscreenDiv.style.display === 'none';
          if(!hidden && fullScreenHidden) {
            resetAll();
          }
          }).observe(slideDiv);
        });

    });

  });
});
$(function(){ $("#wobble").load("wobble-body.html", function() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = `
      const emblaApis = [];
      let slide = 0;
      const wrapperNodes = document.querySelectorAll('.embla')
      wrapperNodes.forEach(wrapper=> {
        const viewportNode = wrapper.querySelector('.embla__viewport')
        const emblaApi = EmblaCarousel(viewportNode, { loop: false, watchDrag: false, })
        emblaApis.push(emblaApi)
        const prevButtonNodes = wrapper.querySelectorAll('.embla__prev')
        const nextButtonNodes = wrapper.querySelectorAll('.embla__next')
        prevButtonNodes.forEach((node) => {
          node.addEventListener('click', () => emblaApi.scrollPrev(), false)
        });
        nextButtonNodes.forEach((node) => {
          node.addEventListener('click', () => emblaApi.scrollNext(), false)
        }); 
      });

      document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            hideFullscreen()
        }
      };
    `;
    document.head.appendChild(script);
    
    setTimeout(()=>{
      document.documentElement.style.overflowY = "visible";
    },1000);
    


    const soundCheck = setInterval(function () {
      if(navigator.userActivation.hasBeenActive) {
        document.getElementById('music').play();
        $('#mute-img').attr("src", "./img/volume_on.png");
        muted = false;
        clearInterval(soundCheck);
      }
    }, 1000);
  }); 
});