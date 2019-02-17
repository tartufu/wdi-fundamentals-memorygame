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

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!")
	} else {
		console.log("Sorry, try again!")
	}
}

var flipCard = function(cardId) {
	//
	console.log(`User flipped ${cards[cardId].rank}`);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch();
};

flipCard(0);
flipCard(2);