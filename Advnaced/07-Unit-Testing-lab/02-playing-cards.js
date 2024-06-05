function playingCards(face, suit) {
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


    if (faces.indexOf(face) == -1) {
        throw Error(`Invalid face ${face}!`);
    }
    if (!suits.hasOwnProperty(suit)) {
        throw Error(`Invalid suit ${suit}!`);
    }

    return {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    }
}

playingCards('1', 'S');
playingCards('A', 'S');
playingCards('10', 'H');
playingCards('1', 'C');