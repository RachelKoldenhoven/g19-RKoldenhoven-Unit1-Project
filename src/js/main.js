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
/////////////append card divs to game space/////
for (var i = 0; i < 10; i++) {
  var cardDiv = $(document.createElement("div"));
  cardDiv.addClass("dna");
  $('.game-space').append(cardDiv);
  $('.dna').css({"background-image":"url('..//img/card_back.jpg')", "width":"50%", "height":"50%"});
  // var newDiv = $(document.createElement("div"));
  // newDiv.css({'background-color':'blue', 'width':'20px','height':'20px'});

};

// images.forEach(function(img, i) {
//   var imgURI = img;
//   console.log(imgURI);
//   var imgName = "image-" + (i+1);
//  var imgDiv = "<div class= "+imgName+"></div>"
//   $(".carousel-images").append(imgDiv);
//   $("."+imgName).css("background-image", "url("+imgURI+")");
// })



});
