class Set {
    constructor() {
        // collection will hold our set
        this.collection = [];
    }
    // this method will check for the presence of an element and return true or false
    has(element) {
        return this.collection.indexOf(element) !== -1;
    }
    // this method will return all the values in the set
    values() {
        return this.collection;
    }

    add(item) {
        if (this.has(item) === false) {
            this.collection.push(item)
            return true
        } else {
            return false
        }
    }

    remove(item) {
        if (this.has(item) === true) {
            let index = this.collection.indexOf(item)
            this.collection.splice(index, 1)
            return true
        } else {
            return false
        }
    }

    size() {
        return this.collection.length
    }

    union(otherSet) {
        let newSet = new Set
        const addToSet = item => newSet.add(item)
        this.values().forEach(addToSet)
        otherSet.values().forEach(addToSet)
        return newSet
    }

    intersection(otherSet) {
        let intersection = []
        for (let item of otherSet.values()) {
            this.has(item) && intersection.push(item)
        }
        return intersection
    }

    difference(otherSet) {
        let temp = new Set
        temp.collection = this.values()
        let difference = new Set
        for (let item of otherSet.values()) {
            if (this.has(item)) {
                temp.remove(item)
            } else {
                difference.add(item)
            }
        }
        return temp.union(difference).values()
    }

    subset(otherSet) {
        for (let item of this.values()) {
            if (!otherSet.has(item)) {
                return false
            }
        }
        return true
    }
}



let A = new Set
A.collection = ['a', 'c', 'd']
let B = new Set
B.collection = ['a', 'c', 'd']

console.log(A.union(B))
console.log(A.intersection(B))
console.log(A.difference(B))
console.log(A.subset(B))

