var Map = function () {
    this.collection = {};

    this.add = (key, value) => {
        this.collection[key] = value
    }

    this.remove = (key, value) => {
        delete this.collection[key]
    }

    this.get = (key) => {
        return this.collection[key]
    }

    this.has = (key) => {
        return this.collection[key] ? true : false
    }

    this.values = () => {
        return Object.values(this.collection)
    }
};

let map = new Map
map.add('dog', 1)
console.log(map.collection)
console.log(map.has('dog'))
console.log(map.values())

map.remove('dog', 1)
console.log(map.collection)
