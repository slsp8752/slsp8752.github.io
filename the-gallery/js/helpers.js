
function showFullscreen(image, id) {
    $('#fullscreen-overlay').fadeIn(500);
    $('#mute-button').hide();
    emblaApis.forEach(api => {
        if(api.rootNode().parentNode.id === id) {
            slide = api.selectedScrollSnap();
        }
    });
    $('#fullscreen-image').attr('src', image);
    $('#wobble').fadeOut(500);
}

function hideFullscreen() {
    $('#wobble').fadeIn(500, function () {
        emblaApis.forEach(api => {
            api.scrollTo(slide, true);
        });
    });
    $('#mute-button').show();
    $('#fullscreen-overlay').fadeOut(500);
    const iframeContainer = document.getElementById("fullscreen-iframe");
    $('#fullscreen-image').attr('src', '');
    iframeContainer.innerHTML = '';
}

function fullscreenIframe(url, id) {
    $('#fullscreen-overlay').fadeIn(500);
    $('#mute-button').hide();
    emblaApis.forEach(api => {
        if(api.rootNode().parentNode.id === id) {
            slide = api.selectedScrollSnap();
        }
    });
    const iframeContainer = document.getElementById('fullscreen-iframe');
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '1000px';
    iframe.style.height = '1000px';
    iframe.style.maxWidth = '100%';
    iframe.style.maxHeight = '100%';
    iframeContainer.appendChild(iframe);
    $('#wobble').fadeOut(500);
}

function toggleMute() {
    muted = !muted;
    $('#mute-img').attr("src", muted ? "./img/volume_mute.png" : "./img/volume_on.png");
    document.getElementById('music').volume = !+muted;
}
