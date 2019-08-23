var messages = {

  'generic' : [
    'We are watching you.',
    'What do you think you\'re doing?',
    'There\'s nothing interestng here.',
    'Really?',
    'All this snooping will get you nowhere.'
  ],

  'notes' : [
    'There\'s nothing but the ramblings of an old man here for you.'
  ],


  'pictures' : [
      'Precious memories and conspiracies... Not yours, though.',
      'Are you really spending your time looking at these?'
  ],

  'conspiracy' : [
      'Oh, these are CLEARLY important. Sure.',
      'Do you think you\'re clever?',
      'You aren\'t clever, you know.'
  ],


  'videos' : [
    'Home movies? Really?'
  ],

  'drawing' : [
    'We see you... drawing all over the screen. Uh... Good work.'
  ],

  'charter' : [
    'There\'s no reason to look at that...'
  ]
};

function toast(type){
    var length = messages[type].length;
    console.log(length);
    var mes = messages[type][Math.floor(Math.random() * length)];
    console.log(mes);
    iziToast.show({
      message: mes,
      position: 'topRight'
    });
}

function spawnMessage(type){
    var maximum = 10;
    var chance = Math.floor(Math.random() * maximum);
    console.log(chance);
    if(chance >= maximum - 1){
      toast(type);
    }
}



    
