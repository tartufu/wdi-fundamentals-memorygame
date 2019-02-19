console.log("Up and running!");

var cards = [
	{ //first object
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},

	{ //second object
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},

	{ //3rd object
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},

	{ //4th object
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png')
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var cardsInPlay = [];

var checkForMatch = function() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	} else {
		alert("Sorry, try again!")
	}
}

var flipCard = function() {
	//
	var cardId = this.getAttribute('data-id')
	console.log(`User flipped ${cards[cardId].rank}`);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch();
};

createBoard();