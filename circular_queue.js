class CircularQueue {
    constructor(size) {

        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size - 1;
        this.size = size

        while (size > 0) {
            this.queue.push(null);
            size--;
        }
    }

    print() {
        console.log(this.queue);
    }

    enqueue(item) {
        if (this.queue[this.write] === null) {
            this.queue[this.write] = item
            if (this.write < this.max) {
                this.write++
            } else {
                this.write = 0
            }
            return item
        } else {
            return null
        }
    }

    dequeue() {
        if (this.queue[this.read] !== null) {
            let readItem = this.queue[this.read]
            this.queue[this.read] = null
            if (this.read < this.max) {
                this.read++
            } else {
                this.read = 0
            }
            return readItem
        } else {
            return null
        }
    }
}

// let circularQueue = new CircularQueue(5)
// circularQueue.print()
// let x = 0
// let y = 0
// for (x; x < 5; x++) {
//     console.log('enq: ', circularQueue.enqueue(x))
// }
// circularQueue.print()
// console.log('////////////')
// for (y; y < 3; y++) {
//     console.log('deq: ', circularQueue.dequeue(y))
// }
// for (x; x < 9; x++) {
//     console.log('enq: ', circularQueue.enqueue(x))
// }

// console.log('////////////')
// circularQueue.print()
// console.log(circularQueue.write)
// console.log(circularQueue.read)

/*
    ALT

enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) this.write = 0;
      return item;
    }
    return null;
  }

  dequeue() {
    if (this.queue[this.read] != null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) this.read = 0;
      return item;
    }
    return null;
  }
*/

module.exports = CircularQueue

