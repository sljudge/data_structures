function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.head = function () {
        return head;
    };

    this.size = function () {
        return length;
    };

    this.add = function (element) {
        const node = new Node(element)
        if (head) {
            let temp = head
            while (temp.next !== null) {
                temp = temp.next
            }
            temp.next = node
        } else {
            head = node
        }
        length++
    };

    this.remove = function (element) {
        if (head && element === head.element) {
            head = head.next ? head.next : null
            return length--
        } else {
            let temp = head
            while (temp) {
                let current = temp.next
                if (current && element === current.element) {
                    temp.next = current.next
                    return length--
                }
                temp = current
            }
        }
    }

    this.removeAt = function (index) {
        let i = 0
        let current = head
        let previous

        if (index === 0) {
            head = current.next
            length--
            return current.element
        } else if (index < 0 || index >= this.size()) {
            return null
        }

        while (i !== index) {
            previous = current
            current = current.next
            i++
        }
        previous.next = current.next

        length--
        return current.element
    }

    this.isEmpty = function () {
        if (this.size() === 0) {
            return true
        } else {
            return false
        }
    }

    this.indexOf = function (element) {
        let temp = head
        for (let i = 0; i < this.size(); i++) {
            if (element === temp.element) {
                return i
            } else {
                temp = temp.next
            }
        }
        return -1
    }

    this.elementAt = function (index) {
        let i = 0
        let temp = head
        while (i !== index && i < this.size()) {
            temp = temp.next
            i++
        }
        return temp ? temp.element : undefined
    }

    this.addAt = function (index, element) {
        let node = new Node(element)
        let i = 0
        let current = head
        let previous

        if (index === 0) {
            node.next = current
            head = node
            length++
            return [element, length]
        } else if (index < 0 || index >= this.size()) {
            return false
        }

        while (i !== index) {
            previous = current
            current = current.next
            i++
        }
        node.next = current
        previous.next = node
        length++
        return [element, length]
    }
}

let linkedList = new LinkedList

linkedList.add('butter')
linkedList.add('milk')
linkedList.add('cheese')
linkedList.add('cream')

linkedList.addAt(2, 'jam')
// console.log(linkedList.elementAt(3))
// console.log(linkedList.elementAt(4))

linkedList.remove('ham')
// console.log(linkedList.removeAt(3))

// console.log(linkedList.indexOf('ham'))
// console.log(linkedList.indexOf('cheese'))

// console.log(linkedList.elementAt(0))

console.log('///////////////////////')
console.log('head: ', linkedList.head())

