class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    increase(length)  {
        this.innerLength += length;
    }
    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 3)
            this.innerLength = 0;
    }
    toString() {
        if (this.innerLength < this.innerString.length)
            return this.innerString.slice(0, this.innerLength) + '...';
        return this.innerString;
    }
}

let myString = new Stringer('12345678901234567890', 20);
myString.decrease(20);
console.log(myString.innerLength);
console.log(myString.toString());
myString.increase(7);
console.log(myString.innerLength);
console.log(myString.toString());