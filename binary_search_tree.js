var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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

    this.findMaxHeight = function (count = 1, root = this.root) {
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
        if (count > this.maxHeight) {
            this.maxHeight = count
        }
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
binarSearchTree.add(8)
binarSearchTree.add(3)
binarSearchTree.add(10)
binarSearchTree.add(14)
binarSearchTree.add(13)
binarSearchTree.add(1)
binarSearchTree.add(6)
binarSearchTree.add(4)
binarSearchTree.add(7)


// console.log(binarSearchTree.findMin())
// console.log(binarSearchTree.findMax())
// console.log(binarSearchTree.isPresent(13))

console.log(binarSearchTree.findMaxHeight())
console.log('MAX HEIGHT: ', binarSearchTree.maxHeight)

// displayTree(binarSearchTree)

// console.log(isBinaryTree(binarSearchTree))
