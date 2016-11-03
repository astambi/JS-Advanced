class SortedList {
    constructor(){
        this.collection = [];
        this.size = 0;
    }
    add (element) {
        this.collection.push(element);
        this.size++;
        this.collection.sort((a, b) => a - b);
    }
    remove (index) {
        if (this._isValid(index)) {
            this.collection.splice(index, 1);
            this.size--;
        }
    }
    get (index) {
        if (this._isValid(index))
            return this.collection[index];
    }
    _isValid(index) {
        return index >= 0 && index < this.collection.length;
    }
}