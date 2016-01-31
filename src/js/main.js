// add scripts

$(document).on('ready', function() {
  console.log('sanity please!');

//////////////append player names//////////

$('#p1btn').on('click', function(e) {
  e.preventDefault();
  var player1Name = $('#p1Name').val();
  console.log(player1Name);
  $('.panel-title-p1').append(player1Name);
  $('.p1-input').hide();
});

$('#p2btn').on('click', function(e) {
  e.preventDefault();
  var player2Name = $('#p2Name').val();
  console.log(player2Name);
  $('.panel-title-p2').append(player2Name);
  $('.p2-input').hide();
});


$('.icon').on('click', function() {
  console.log("icon clicked");
  $('.highlighted').removeClass('highlighted')
  $(this).addClass('highlighted');
})
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