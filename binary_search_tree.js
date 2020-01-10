var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function Queue() {
    var collection = [];
    this.print = function () {
        console.log(collection);
    };
    this.get = function () {
        return collection
    }
    this.enqueue = function (item) {
        collection.push(item)
    }
    this.dequeue = function () {
        return collection.shift()
    }
    this.front = function () {
        return collection[0]
    }
    this.size = function () {
        return collection.length
    }
    this.isEmpty = function () {
        return collection.length === 0
    }
}
function BinarySearchTree() {
    this.root = null;
    this.minHeight = null
    this.maxHeight = null

    this.add = function (element, root = this.root, parent = null) {
        const node = new Node(element)
        let currentRoot = root
        const value = currentRoot ? currentRoot.value : null

        if (this.root === null) {
            this.root = node
            return true
        }
        if (currentRoot === null) {
            currentRoot = node
            if (parent.value > element) {
                parent.left = currentRoot
            } else if (parent.value < element) {
                parent.right = currentRoot
            }
            return true
        }

        if (element > value) {
            parent = currentRoot
            currentRoot = currentRoot.right
            return this.add(element, currentRoot, parent)
        } else if (element < value) {
            parent = currentRoot
            currentRoot = currentRoot.left
            return this.add(element, currentRoot, parent)
        } else {
            return null
        }
    }

    this.findMin = function (root = this.root) {
        if (root === null) {
            return null
        }

        if (root.left === null) {
            return root.value
        } else {
            root = root.left
            return this.findMin(root)
        }
    }

    this.findMax = function (root = this.root) {
        if (root === null) {
            return null
        }

        if (root.right === null) {
            return root.value
        } else {
            root = root.right
            return this.findMax(root)
        }
    }

    this.isPresent = function (element, root = this.root) {
        if (root === null) {
            return false
        } else if (element === root.value) {
            return true
        }

        if (element < root.value) {
            root = root.left
            return this.isPresent(element, root)
        } else if (element > root.value) {
            root = root.right
            return this.isPresent(element, root)
        }
    }

    this.findMaxHeight = function (count = 0, root = this.root) {
        if (root === null) {
            return -1
        }
        if (root.left || root.right) {
            count++
        }
        if (root.left) {
            this.findMaxHeight(count, root.left)
        }
        if (root.right) {
            this.findMaxHeight(count, root.right)
        }
        if (!root.left && !root.right) {
            if (count > this.maxHeight) {
                this.maxHeight = count
            }
        }
    }

    this.getMaxHeight = function () {
        this.findMaxHeight()
        return this.maxHeight
    }

    this.findMinHeight = function (count = 0, root = this.root) {
        if (root === null) {
            return -1
        }
        if (root.left || root.right) {
            count++
        }
        if (root.left) {
            this.findMinHeight(count, root.left)
        }
        if (root.right) {
            this.findMinHeight(count, root.right)
        }
        if (!root.left && !root.right) {
            if (this.minHeight === null) {
                this.minHeight = count
            } else if (count < this.minHeight) {
                this.minHeight = count
            }
        }
    }

    this.getMinHeight = function () {
        this.findMinHeight()
        return this.minHeight
    }

    this.isBalanced = function () {
        this.findMinHeight()
        this.findMaxHeight()

        if (this.maxHeight === 1) {
            return true
        }

        const difference = this.maxHeight - this.minHeight
        if (!this.root.left || !this.root.right || difference > 1) {
            return false
        } else {
            return true
        }
    }

    this.inOrder = function (root = this.root, result = []) {
        if (root === null) {
            return null
        }
        if (root.left) {
            this.inOrder(root.left, result)
        }
        result.push(root.value)
        if (root.right) {
            this.inOrder(root.right, result)
        }
        return result
    }

    this.preOrder = function (root = this.root, result = []) {
        if (root === null) {
            return null
        }
        result.push(root.value)
        if (root.left) {
            this.preOrder(root.left, result)
        }
        if (root.right) {
            this.preOrder(root.right, result)
        }

        return result
    }

    this.postOrder = function (root = this.root, result = []) {
        if (root === null) {
            return null
        }
        if (root.left) {
            this.postOrder(root.left, result)
        }
        if (root.right) {
            this.postOrder(root.right, result)
        }
        result.push(root.value)

        return result
    }

    this.levelOrder = function (root = this.root, result = []) {
        if (root === null) {
            return null
        }
        const queue = new Queue
        queue.enqueue(root)
        while (queue.size() !== 0) {
            let node = queue.dequeue()
            result.push(node.value)
            if (node.left) {
                queue.enqueue(node.left)
            }
            if (node.right) {
                queue.enqueue(node.right)
            }
        }
        return result
    }

    this.reverseLevelOrder = function (root = this.root, result = []) {
        if (root === null) {
            return null
        }
        const queue = new Queue
        queue.enqueue(root)
        while (queue.size() !== 0) {
            let node = queue.dequeue()
            result.push(node.value)
            if (node.right) {
                queue.enqueue(node.right)
            }
            if (node.left) {
                queue.enqueue(node.left)
            }
        }
        return result
    }

    this.remove = function (element, parent = this.root) {
        let root = this.root
        // CHECK TO SEE IF ELEMENT PRESENT IN TREE
        if (!this.isPresent(element)) {
            return null
        }
        //IF ELEMENT IS ROOT THEN ROOT = NULL
        if (!root.left && !root.right) {
            this.root = null
        }
        //LOOP TO FIND ELEMENT
        while (root.value !== element) {
            parent = root
            if (element < root.value) {
                root = root.left
            } else if (element > root.value) {
                root = root.right
            }
        }
        //CALCULATE NUMBER OF CHILDREN AND REMOVE ACCORDINGLY
        let children = (root.left ? 1 : 0) + (root.right ? 1 : 0)
        if (children === 0) {
            if (parent.value > root.value) {
                parent.left = null
                root = null
            } else if (parent.value < root.value) {
                parent.right = null
                root = null
            }
        } else if (children === 1) {
            if (parent === this.root) {
                if (this.root.right) {
                    this.root = this.root.right
                } else {
                    this.root = this.root.left
                }
            }
            if (parent.value > root.value) {
                if (root.left) {
                    parent.left = root.left
                    root = null
                } else if (root.right) {
                    parent.left = root.right
                    root = null
                }
            } else if (parent.value < root.value) {
                if (root.left) {
                    parent.right = root.left
                    root = null
                } else if (root.right) {
                    parent.right = root.right
                    root = null
                }
            }
        }
        return true
    }
}

function isBinaryTree(tree) {
    const root = tree.root
    const value = root.value

    let left
    if (root.left) {
        left = new BinarySearchTree
        left.root = root.left
    }
    let right
    if (root.right) {
        right = new BinarySearchTree
        right.root = root.right
    }

    console.log('ROOT: ', root.value)
    left && console.log('LEFT: ', left.root.value)
    right && console.log('RIGHT: ', right.root.value)
    console.log('//////////////////')

    if (root === null) {
        return false
    }
    if (left && left.findMax() > value) {
        return false
    }
    if (right && right.findMin() < value) {
        return false
    }
    if (left && !isBinaryTree(left)) {
        return false
    }
    if (right && !isBinaryTree(right)) {
        return false
    }

    return true
}

let binarSearchTree = new BinarySearchTree()
binarSearchTree.add(3)
binarSearchTree.add(8)
// binarSearchTree.add(10)
// binarSearchTree.add(14)
// binarSearchTree.add(13)
// binarSearchTree.add(1)
// binarSearchTree.add(6)
// binarSearchTree.add(4)
// binarSearchTree.add(7)


// console.log(binarSearchTree.findMin())
// console.log(binarSearchTree.findMax())
// console.log(binarSearchTree.isPresent(13))

// console.log(binarSearchTree.getMaxHeight())
// console.log(binarSearchTree.getMinHeight())
// console.log('MAX HEIGHT: ', binarSearchTree.maxHeight)
// console.log('MIN HEIGHT: ', binarSearchTree.minHeight)

// console.log(binarSearchTree.isBalanced())

// console.log(binarSearchTree.inOrder())
// console.log(binarSearchTree.preOrder())
// console.log(binarSearchTree.postOrder())

// console.log(binarSearchTree.levelOrder())
// console.log(binarSearchTree.reverseLevelOrder())

// console.log(binarSearchTree.remove(4))
// console.log(binarSearchTree.remove(6))
console.log(binarSearchTree.remove(8))

// displayTree(binarSearchTree)
console.log(isBinaryTree(binarSearchTree))
