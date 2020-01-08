var called = 0;
var hash = string => {
    called++;
    var hashed = 0;
    for (var i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i);
    }
    return hashed;
};
var HashTable = function () {
    this.collection = {};

    this.add = (value) => {
        let key = hash(value)
        if (this.collection[key]) {
            this.collection[key] = [...this.collection[key], value]
        } else {
            this.collection[key] = [value]
        }
    }

    this.remove = (key) => {
        delete this.collection[key]
    }

    this.lookup = (key) => {
        return this.collection[key] ? this.collection[key] : null

    }
};

let hashTable = new HashTable
hashTable.add('Fido')
console.log(hashTable.collection)
hashTable.add('Fido')
console.log(hashTable.collection)
console.log(hashTable.lookup(386))
