var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;

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

console.log(binarSearchTree.findMin())
console.log(binarSearchTree.findMax())

displayTree(binarSearchTree)
