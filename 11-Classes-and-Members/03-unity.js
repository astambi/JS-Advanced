class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat)
            this.unitedRats.push(otherRat);
    }

    getRats() {
        return this.unitedRats.map(rat=>rat.name);
    }

    toString() {
        return this.name + '\n' + this.unitedRats
                                .map(rat => '##' + rat.name)
                                .join('\n');
    }
}

let rat = new Rat('Remmy');
let rat1 = new Rat('Rat1');
let rat2 = new Rat('Rat2');
rat.unite(rat1);
rat.unite(rat2);
console.log(rat.getRats());
console.log(rat.toString());