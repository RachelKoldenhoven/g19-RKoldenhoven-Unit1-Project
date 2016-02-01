// add scripts


$(document).on('ready', function() {
  console.log('sanity please!');

//////////////associate player with their stuff/////////
  var p1 = {
    label: "p1",
    btn: $('#p1btn'),
    name: $('#p1Name'),
    panel: $('.panel-title-p1'),
    input: $('.p1-input'),
    icon: $('#p1icon')
  };

  var p2 = {
    label: "p2",
    btn: $('#p2btn'),
    name: $('#p2Name'),
    panel: $('.panel-title-p2'),
    input: $('.p2-input'),
    icon: $('#p2icon')
  };

//////////////append player names//////////

var state = {
  player: undefined
};

var init = function(player) {

  player.btn.on('click', function(e) {
    e.preventDefault();
    var playerName = player.name.val();
    player.panel.append(playerName);
    player.input.hide();
    state.player = player;
  });
    return state.player;
};

init(p1);
init(p2);

///////////////////players choose icons////////

$('.icon').on('click', function() {
  $('.highlighted').removeClass('highlighted')
  $(this).addClass('highlighted');
});

$('#icon-choice').on('click', function() {

  $(state.player.icon).append($('.highlighted'));
  $('.highlighted').removeClass('highlighted');
});
/////////////create card data in random arrangement/////
//////////////get json data////////////////

var cards =[];
$.getJSON("../genetics/vocab.json", function(data) {
  var terms = data.genetics.map(function(vocabEntry, idx){
    return {term: vocabEntry.term, id: idx}
  });
  var definitions = data.genetics.map(function(vocabEntry, idx) {
    return {definition: vocabEntry.definition, image: vocabEntry.image, id: idx}
  });
  var termsAndDefinitions = terms.concat(definitions);

  for (var i = 0; i < 6; i++) {
    cards.push([]);
    var rowID = i;
    var row = $("<div class= 'row' id= '"+rowID+"'></div>");

    for (var j = 0; j <5; j++) {
      var randomItemIndex = Math.floor(Math.random()*termsAndDefinitions.length);
      var randomItem = termsAndDefinitions.splice(randomItemIndex, 1);
      cards[i].push(randomItem[0]);
      var div = $("<div class='col-md-2 game-space'></div>");
      var imgURL = randomItem[0].image;
      div.append(randomItem[0].term || randomItem[0].definition + "<img src='"+imgURL+"'>");
      row.append(div);
    };
    $('main').append(row);
  };
  console.log(cards);
  console.log(cards[0][0].id);

});










});
