

new SimpleLightbox({elements: '.image'});

spawnMessage("generic");

$('.folder').on('dragstart', function(event) { event.preventDefault(); });

function getNote(id){
    var htmlString = '<div class="popup';
    var currp;
    if((Object.keys(notes[id]).length) > 3){
      htmlString += ' long">';
    }
    else{
      htmlString += '">';
    }
    for(var p in notes[id]){
      console.log(p);
      currp = notes[id][p];
      console.log(currp); 
      htmlString += '<p>';
      htmlString += currp;
      htmlString += '</p>';
    }
    htmlString += '</div>';
    console.log(htmlString);
    return htmlString;
}

function getVideo(id){
    var htmlString = '<video width="1792px" height="768px" controls controlsList="nodownload"> <source src="video/';
    htmlString += videos[id];
    htmlString += '" type="video/mp4"></video>'
    return htmlString;
}
  
    $('.charter').on('click', function() {
        spawnMessage("charter");
        SimpleLightbox.open({
    	content: '<iframe src="http://www.thecharter.org" id="charterframe" width="1792px" height="768px"></iframe>',
    	elementClass: 'slbContentEl'
});
    });

    $('.image').on('click', function() {
	if(Math.random() > 0.5){
          spawnMessage("pictures");
        }
        else{
          spawnMessage("generic");
        }
});

    $('.video').on('click', function() {
	var id = ($(this)[0].id);
	var video = getVideo(id);
	if(Math.random() > 0.5){
          spawnMessage("videos");
        }
        else{
          spawnMessage("generic");
        }
        SimpleLightbox.open({
    	content: video,
    	elementClass: 'slbContentEl'
});
    });

    $('.note').on('click', function() {
	var id = ($(this)[0].id);
	var note = getNote(id);
	if(Math.random() > 0.5){
          spawnMessage("notes");
        }
        else{
          spawnMessage("generic");
        }
        SimpleLightbox.open({
    	content: note,
    	elementClass: 'slbContentEl'
});
    });

