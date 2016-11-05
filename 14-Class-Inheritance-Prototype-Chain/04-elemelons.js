function elemelons() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon)
                throw new TypeError("Abstract class cannot be instantiated directly");
            this.weight = weight;
            this.melonSort = melonSort;
            this._elementIndex = weight * melonSort.length;
        }
        get elementIndex() {
            return this._elementIndex;
        }
        toString() {
            let className = this.constructor.name
                            .slice(0, -"melon".length);
            return  `Element: ${className}\n` +
                    `Sort: ${this.melonSort}\n` +
                    `Element Index: ${this.elementIndex}`;
        }
    }
    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elements = ['Fire', 'Earth', 'Air', 'Water'];
            this._currentElement = 'Water';
        }
        morph() {
            this._currentElement = this.elements.shift();
            this.elements.push(this._currentElement);
        }
        toString() {
            let className = this.constructor.name
                            .slice(0, -"melon".length); // Melolemon
            return super.toString()
                        .replace(className, this._currentElement); // Water, Fire, etc
        }
    }

    return {Melon, Watermelon, Firemelon, Airmelon, Earthmelon, Melolemonmelon};
}

// let Melon = elemelons().Melon;
// let m = new Melon(100, 'Melon'); // throw error

// let Watermelon = elemelons().Watermelon;
// let wm = new Watermelon(100, 'Watermelon');
// console.log(wm.toString());

// let MorphingMelon = elemelons().Melolemonmelon;
// let mm = new MorphingMelon(100, 'Morphing Melon');
// console.log(mm.toString());
// for (let i = 0; i < 4; i++) {
//     mm.morph();
//     console.log(mm.toString());
// }