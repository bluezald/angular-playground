// TODO:
// - If at the start of the game there's already a player with 21 score, end game
// - If both has same score, display TIE

let suits  = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack",
    "Ten", "Nine", "Eight", "Seven", "Six",
    "Five", "Four", "Three", "Two"];

let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

let gameStarted = false;
let gameOver = false;
let playerWon = false;
let dealerCards = [];
let playerCards = [];
let dealerScore = 0;
let playerScore = 0;
let deck = [];


hitButton.style.display = "none";
stayButton.style.display = "none";
showStatus();

newGameButton.addEventListener("click", function() {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [ getNextCard(), getNextCard() ];
    playerCards = [ getNextCard(), getNextCard() ];

    newGameButton.style.display = "none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    showStatus();
});

hitButton.addEventListener("click", function() {
    playerCards.push(getNextCard());
    checkForEndGame()
    showStatus();
});

stayButton.addEventListener("click", function() {
    gameOver = true;
    checkForEndGame();
    showStatus();
});

function createDeck() {
    let deck = [];
    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
            let card = {
                suit: suits[i],
                value: values[j]
            };
            deck.push(card);
        }
    } 
    return deck;
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}

function getNextCard() {
    return deck.shift();
}

function shuffleDeck(deck) {
    for(let i = 0; i < deck.length; i++) {
        let swapIndex = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIndex];
        deck[swapIndex] = deck[i];
        deck[i] = tmp;
    }
}

function getCardNumericValue(card) {
    switch(card.value) {
        case "Ace":
            return 1;
        case "Two":
            return 2;
        case "Three":
            return 3;
        case "Four":
            return 4;
        case "Five":
            return 5;
        case "Six":
            return 6;
        case "Seven":
            return 7;
        case "Eight":
            return 8;
        case "Nine":
            return 9;
        default:
            return 10;
    }
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for(let i = 0; i < cardArray.length; i++) {
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if(card.value === "Ace") {
            hasAce = true;
        }
    }
    if(hasAce && score + 10 <= 21) {
        return score + 10;
    }

    return score;
}

function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForEndGame() {

    updateScores();

    if(gameOver) {
        // dealer has to take cards
        while(dealerScore < playerScore && playerScore <= 21 && dealerScore <= 21) {
            dealerCards.push(getNextCard());
            updateScores();
        }
    }

    if(playerScore > 21) {
        playerWon = false;
        gameOver = true;
    } else if(dealerScore > 21) {
        playerWon = true;
        gameOver = true;
    } else if(gameOver) {

        playerWon = playerScore > dealerScore? true : false;

        newGameButton.style.display = "inline";
        hitButton.style.display = "none";
        stayButton.style.display = "none";

    }

}

function showStatus() {
    if(!gameStarted) {
        textArea.innerText = "Welcome to Blackjack!";
        return;
    }

    let dealerCardString = "";
    for(let i=0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + "\n";
    }

    let playerCardString = "";
    for(let i=0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + "\n";
    }

    updateScores();

    textArea.innerText = 
        "Dealer has: \n" +
        dealerCardString +
        "(score: " + dealerScore + ")\n\n" +

        "Player has: \n" +
        playerCardString +
        "(score: " + playerScore + ")\n\n";

    if(gameOver) {
        if(playerWon) {
            textArea.innerText += "YOU WIN!!!";
        } else {
            textArea.innerText += "DEALER WINS :(";
        }

        newGameButton.style.display = "inline";
        hitButton.style.display = "none";
        stayButton.style.display = "none";
    }

}


