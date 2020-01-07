class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    print() {
        console.log(this.collection);
    };

    findPriority() {
        let values = this.collection.map(item => item[1])
        console.log('values', values)
        let thePriority = Math.min.apply(null, values)
        return this.collection.find(item => item[1] === thePriority)
    }

    enqueue(item) {
        this.collection.push(item)
    }
    dequeue() {
        let removeItem = this.findPriority()
        let removePosition = this.collection.indexOf(removeItem)
        this.collection.splice(removePosition, 1)
        return removeItem[0]
    }
    front() {
        return this.collection[0]
    }
    size() {
        return this.collection.length
    }
    isEmpty() {
        return this.collection.length === 0
    }
}

let priorityQueue = new PriorityQueue
priorityQueue.collection = [['a', 1], ['b', 1], ['c', 3], ['d', 2], ['e', 4], ['f', 0]]
priorityQueue.print()
console.log(priorityQueue.findPriority())
priorityQueue.enqueue(['g', 1])
priorityQueue.print()
priorityQueue.dequeue()
priorityQueue.print()
console.log(priorityQueue.size())

