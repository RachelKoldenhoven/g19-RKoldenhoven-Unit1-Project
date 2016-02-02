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
    icon: $('#p1icon'),
    score: $('#p1Points')
  };

  var p2 = {
    label: "p2",
    btn: $('#p2btn'),
    name: $('#p2Name'),
    panel: $('.panel-title-p2'),
    input: $('.p2-input'),
    icon: $('#p2icon'),
    score: $('#p2Points')
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
/////get data from json file and return objects that have either the term,
/////or the definition and picture.  Then concat them into one array.
$.getJSON("../genetics/vocab.json", function(data) {
  var terms = data.genetics.map(function(vocabEntry, idx){
    return {term: vocabEntry.term, id: idx}
  });
  var definitions = data.genetics.map(function(vocabEntry, idx) {
    return {definition: vocabEntry.definition, image: vocabEntry.image, id: idx}
  });
  var termsAndDefinitions = terms.concat(definitions);

////////create six rows of five divs each and add a random item from the array to each new div
////////append divs to DOM
  for (var i = 0; i < 6; i++) {
    cards.push([]);
    var rowID = i;
    var row = $("<div class= 'row' id= '"+rowID+"'></div>");

    for (var j = 0; j <5; j++) {
      var randomItemIndex = Math.floor(Math.random()*termsAndDefinitions.length);
      var randomItem = termsAndDefinitions.splice(randomItemIndex, 1)[0];
      cards[i].push(randomItem);
      var container = $("<div class='col-md-2 container'></div>");
      var div = $("<div class='game-space'></div>");
      var imgURL = randomItem.image;
      div.append(randomItem.term || randomItem.definition + "<img src='"+imgURL+"'>");
      container.append(div);
      row.append(container);
      container.attr("data-id", randomItem.id);
    };
    $('main').append(row);
  };
  var cardFront = $("<div class='card-front'></div>");
  cardFront.append("<img src='../genetics/img/Genetic.jpeg'>");
  $('.container').append(cardFront);

//////////////////////event handler for flipping cards/////////
  var cardCount = 0;
  var lastCard;
  $('.container').on('click', function() {
    if($(this).hasClass("selected")) {
      return;
    }
    if(lastCard === undefined) {
      lastCard = $(this);
    } else if (lastCard.attr("data-id") === $(this).attr("data-id")) {
      lastCard.animate({opacity: "0.0"}, 'slow');
      $(this).animate({opacity: "0.0"}, 'slow');
      lastCard = undefined;
    } else {
      lastCard = undefined;
    }

    $(this).addClass("selected");
    cardCount += 1;
      if(cardCount >=2) {
        setTimeout(function() {
        $('.container').removeClass("selected");
        cardCount = 0;
      }, 3000);

      }
  });



});










});
