var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var CircularDoublyLinkedList = function () {
    this.head = null;
    this.tail = null;

    this.size = function () {

        if (this.head === null) {
            return 0
        } else if (this.head.next === null) {
            return 1
        }

        let current = this.head.next
        let i = 0
        while (current !== this.head) {
            current = current.next
            i++
        }
        return i + 1

    }

    this.add = function (element) {
        const node = new Node(element)
        if (this.head === null) {
            this.head = node
            this.tail = node
            this.head.next = this.tail
            this.tail.next = this.head
            return node
        } else if (this.head && this.head.next === null) {
            node.prev = this.head
            node.next = this.head
            this.tail = node
            this.head.next = this.tail
            this.head.prev = this.tail
            return node
        }

        let current = this.head.next
        while (current.next !== this.head) {
            current = current.next
        }
        node.next = this.head
        node.prev = current
        current.next = node
        this.tail = node
        this.head.prev = this.tail

        return node
    }



    this.remove = function (element) {
        const node = new Node(element)
        let current
        if (this.size() === 0) {
            return null
        }
        if (this.head.data === node.data) {
            if (this.size() === 1) {
                this.head = null
                this.tail = null
                return null
            }
            current = this.head.next
            current.prev = this.tail
            this.head = current
            this.tail.next = this.head
        }
        let previous = this.head
        current = previous.next
        while (current !== this.head) {
            if (current.data === element) {
                previous.next = current.next
                current = current.next
                current.prev = previous
            } else {
                previous = current
                current = current.next
            }
        }
        this.head = current
        this.tail = current.prev
    }
}



const circularDoublyLinkedList = new CircularDoublyLinkedList


circularDoublyLinkedList.add('a')
circularDoublyLinkedList.add('b')
circularDoublyLinkedList.add('c')
circularDoublyLinkedList.add('d')
circularDoublyLinkedList.add('e')


// console.log(circularDoublyLinkedList.remove('a'))
// console.log(circularDoublyLinkedList.remove('b'))
// console.log(circularDoublyLinkedList.remove('c'))
// console.log(circularDoublyLinkedList.remove('d'))
// console.log(circularDoublyLinkedList.remove('e'))


console.log('HEAD: ', circularDoublyLinkedList.head)
console.log('TAIL: ', circularDoublyLinkedList.tail)
// console.log(circularDoublyLinkedList.size())

// let current = circularDoublyLinkedList.head
// for (let i = 0; i < circularDoublyLinkedList.size(); i++) {
//     console.log(current.data)
//     current = current.next
// }

