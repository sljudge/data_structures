var MaxHeap = function () {
    this.data = []


    this.size = function () {
        return this.data.length
    }

    this.print = function () {
        return this.data
    }

    this.heapify = function (arr) {
        const lastParentIndex = Math.floor(arr.length / 2) - 1

        const swap = (arr, i) => {
            const parent = arr[i]
            const leftChildIndex = i * 2 + 1
            const rightChildIndex = i * 2 + 2
            const leftChild = arr[leftChildIndex]
            const rightChild = arr[rightChildIndex]

            if (parent < leftChild || parent < rightChild) {
                if (rightChild === undefined || rightChild < leftChild) {
                    arr[i] = leftChild
                    arr[leftChildIndex] = parent
                    if (leftChildIndex <= lastParentIndex) {
                        swap(arr, leftChildIndex)
                    }
                } else if (leftChild === undefined || leftChild < rightChild) {
                    arr[i] = rightChild
                    arr[rightChildIndex] = parent
                    if (rightChildIndex <= lastParentIndex) {
                        swap(arr, rightChildIndex)
                    }
                }
            }
        }
        for (let i = lastParentIndex; i >= 0; i--) {
            swap(arr, i)
        }
        this.data = arr
        return arr
    }

    this.insert = function (element) {
        this.data.push(element)
        this.heapify(this.data)
    }
    this.remove = function () {
        const greatestElement = this.data.shift()
        this.heapify(this.data)
        return greatestElement
    }

    this.isHeap = function (heap = this.data, i = 0) {
        console.log('HEAP: ', heap)
        let parent = heap[i]
        let leftChild = heap[i * 2 + 1]
        let rightChild = heap[i * 2 + 2]
        console.log('parent: ', parent)
        console.log('leftChild: ', leftChild)
        console.log('rightChild: ', rightChild)
        console.log('------------------------------------------')
        if (parent < leftChild || parent < rightChild) {
            return false
        } else {
            if (leftChild) {
                this.isHeap(heap, i * 2 + 1)
            }
            if (rightChild) {
                this.isHeap(heap, i * 2 + 2)
            }
            return true
        }
    }

    this.sort = function () {
        let arr = this.data
        let output = []
        while (arr.length > 0) {
            output.push(this.remove(arr))
        }
        return output
    }

};

//17 15 13 9 6 5 10 4 8 3 1

let heap = new MaxHeap

// for (let i of [100, 32, 50, 51, 700]) {
//     heap.insert(i)
// }
const arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17]
console.log('ARRAY: ', arr)
console.log('------------------------------------------')
// for (let i of arr) {
//     heap.insert(i)
// }
console.log('HEAPIFY: ', heap.heapify(arr))
console.log('------------------------------------------')

// [16,14,10,8,7,9,3,2,4,1]
// for (let i of [7, 16, 10, 4, 1, 3, 9, 2, 8, 14]) {
//     heap.insert(i)
// }
// console.log(heap.remove())
// console.log(heap.remove())
// console.log(heap.print())
console.log(heap.insert(18))
console.log(heap.insert(2))
console.log(heap.insert(18))
console.log(heap.insert(9))
console.log(heap.insert(17))
// console.log(heap.print())

console.log('IS HEAP: ', heap.isHeap())

