function Queue() {
    this.collection = [];
    this.print = function () {
        console.log(this.collection);
    };
    this.enqueue = function (item) {
        this.collection.push(item)
    }
    this.dequeue = function () {
        return this.collection.shift()
    }
    this.front = function () {
        return this.collection[0]
    }
    this.size = function () {
        return this.collection.length
    }
    this.isEmpty = function () {
        return this.collection.length === 0
    }
    this.clear = function () {
        this.collection = []
    }
}

module.exports = Queue

