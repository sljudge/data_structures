var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
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
        return '////////////////////////'
    }
}



const doublyLinkedList = new DoublyLinkedList
doublyLinkedList.add('d')
// doublyLinkedList.add('b')
// doublyLinkedList.add('a')
doublyLinkedList.add('c')
// doublyLinkedList.add('d')
// doublyLinkedList.add('a')
// doublyLinkedList.add('a')
doublyLinkedList.add('a')


console.log(doublyLinkedList.remove('a'))

console.log('HEAD: ', doublyLinkedList.head)
console.log('TAIL: ', doublyLinkedList.tail)
console.log(doublyLinkedList.size())

let current = doublyLinkedList.head
for (let i = 0; i < doublyLinkedList.size(); i++) {
    console.log(current.data)
    current = current.next
}

