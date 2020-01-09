var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;

    this.size = function () {
        let i = 0
        let current = this.head
        while (current) {
            current = current.next
            i++
        }
        return i
    }

    this.add = function (element) {
        const node = new Node(element, this.tail)
        if (this.head) {
            let temp = this.head
            while (temp.next !== null) {
                temp = temp.next
            }
            node.prev = temp
            temp.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
        return true
    }

    this.remove = function (element) {

        if (this.size() === 0) {
            return null
        }

        let previous = this.head
        let current = this.head.next
        let found = false

        if (this.size() === 1 && this.head.data === element) {
            this.head = null
            this.tail = null
            return [true, element]
        } else if (this.head.data === element) {
            current.prev = null
            this.head = current
            return [true, element]
        }

        while (current) {
            if (current.next === null & current.data === element) {
                current = previous
                current.next = null
                this.tail = current
                return [true, element]
            } else if (current.data === element) {
                current = current.next
                previous.next = current
                current.prev = previous
                found = true
            } else {
                previous = current
                current = current.next
            }
        }

        return [found, element]
    }

    this.reverse = function () {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let current = this.head
        while (current) {
            let temp = current.next
            current.next = current.prev
            current.prev = temp
            current = current.next
        }
    }

};

let doublyLinkedList = new DoublyLinkedList

doublyLinkedList.add('a')
doublyLinkedList.add('b')
doublyLinkedList.add('c')
doublyLinkedList.add('d')

// console.log(doublyLinkedList.remove('x'))
console.log(doublyLinkedList.reverse())

console.log('HEAD: ', doublyLinkedList.head)
console.log('TAIL: ', doublyLinkedList.tail)
console.log(doublyLinkedList.size())

console.log('//////////////////////////')

let current = doublyLinkedList.head
for (let i = 0; i < doublyLinkedList.size(); i++) {
    console.log(current.data)
    current = current.next
}
console.log('//////////////////////////')

current = doublyLinkedList.tail
for (let i = doublyLinkedList.size() - 1; i >= 0; i--) {
    console.log(current.data)
    current = current.prev
}