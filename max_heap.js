var MaxHeap = function () {
    this.data = [null]

    this.size = function () {
        return this.data.length
    }

    this.print = function () {
        return this.data.slice(1)
    }

    this.heapify = function (i) {
        let parentIndex = Math.floor(i / 2)

        if (i > 1) {
            if (this.data[i] > this.data[parentIndex]) {
                let temp = this.data[parentIndex]
                this.data[parentIndex] = this.data[i]
                this.data[i] = temp
                return this.heapify(parentIndex)
            }
        }
    }

    this.insert = function (element) {
        let i = this.size()
        this.data.push(element)

        this.heapify(i)
    }

    this.isHeap = function (heap = this.data, i = 1) {
        let parent = heap[i]
        let leftChild = heap[i * 2]
        let rightChild = heap[i * 2 + 1]
        console.log('parent: ', parent)
        console.log('leftChild: ', leftChild)
        console.log('rightChild: ', rightChild)
        console.log('//////////////////////////////')
        if (parent < leftChild || parent < rightChild) {
            return false
        }
        if (leftChild) {
            this.isHeap(heap, i * 2)
        }
        if (rightChild) {
            this.isHeap(heap, i * 2 + 1)
        }
        return true
    }

    // this.remove = function () {
    //     let left = 
    // }
};

//17 15 13 9 6 5 10 4 8 3 1

let heap = new MaxHeap

// for (let i of [100, 32, 50, 51, 700]) {
//     heap.insert(i)
// }
for (let i of [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17]) {
    heap.insert(i)
}
// [16,14,10,8,7,9,3,2,4,1]
// for (let i of [7, 16, 10, 4, 1, 3, 9, 2, 8, 14]) {
//     heap.insert(i)
// }
console.log(heap.print())
console.log(heap.isHeap())
// console.log(heap.data.slice(1))

