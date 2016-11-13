function cardDeckBuilder(selector) {
    let builder = (function () {
        let Suits = {
            C: "\u2663",    // ♣
            D: "\u2666",    // ♦
            H: "\u2665",    // ♥
            S: "\u2660"     // ♠
        };

        let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        class Card {
            constructor(face, suit) {
                this.suit = Suits[suit];
                this.face = face;
            }

            get face() {
                return this._face;
            }

            set face(face) {
                if (Faces.includes(face))
                    this._face = face;
            }

            get suit() {
                return this._suit;
            }

            set suit(suit) {
                if (Object.keys(Suits)
                        .map(key => Suits[key])
                        .includes(suit))
                    this._suit = suit;
            }

            toString() {
                return `${this.face} ${this.suit}`;
            }
        }

        function addCard(face, suit) {
            let newCard = new Card(face, suit);

            // append to DOM valid cards only (no undefined face/ suit)
            if (newCard.toString().indexOf('undefined') == -1) {
                let cardHTML =
                    $('<div>').addClass('card')
                        .text('' + newCard)
                        .click(reverseCards);

                $(selector).append(cardHTML);
            }

            function reverseCards() {
                let reversedCards = $('div.card')
                    .toArray()
                    .reverse();

                $(selector).find('div.card')
                    .remove();

                for (let card of reversedCards)
                    $(selector).append(card);

                $(selector).find('div.card')
                    .click(reverseCards);
            }
        }

        return {addCard};
    })();

    return builder;
}