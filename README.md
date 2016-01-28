# g19-RKoldenhoven-Unit1-Project
This is my personal project for Unit 1.

##Project Description

My project is a memory game that will reinforce vocabulary for students.  The initial version of the game will use genetics vocabulary for a 7th grade science class.  The game will start with 30 cards facedown.  A student will click on a card and it will flip over to reveal either a vocabulary term or a definition/picture.  The student will click on a second card with the intention of matching a vocab term card with its corresponding definition/picture.  If the cards match, they will disappear and the student will earn a point.  If they don't match, both cards will flip back over.  Play continues until all 15 pairs have been matched.

I will start with a one-player version with a goal of adding a two-player version as well.


##Technology

I will use HTML/CSS for the user interface.  I will use jQuery to manipulate the DOM to draw the cards and randomly arrange them.  A possible use for an API call could be to load an image or fact to display for the winner when the game is over.


#Features

##User Name/Icon
Students will enter a username into a form.  They will choose an icon to represent themselves.  The name and icon will be displayed on the screen during play.  This information will not be stored after the session is over in order to protect student privacy.

##Game Play
For each new game, the cards will be dynamically added to the DOM in a random arragement.  When a student clicks on two cards in a row that match, the pair of cards will disappear and they will earn a point.  Play continues until all cards have disappeared.

##Score
When a matching pair of cards disappear, a point will be added to a score that is displayed under a player's username and icon.

##Winning
When the game is over, a message will appear declaring the winner.  The message could include an animation/gif, or a picture/quote/science fact pulled from an API.


##Stretch Goals
Two-player version
Choice of vocabulary with multiple sets available











