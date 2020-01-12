var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var TrieNode = function () {

    this.keys = new Map();
    for (let i = 97; i < 123; i++) {
        this.keys.set(String.fromCharCode(i), null)
    }

    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};
var Trie = function () {
    this.root = new TrieNode(null)

    this.add = function (word, root = this.root, i = 0) {
        let letter = word[i]
        if (i === word.length) {
            root.setEnd()
            return true
        }
        if (root.keys.get(letter) === null) {

            let node = new TrieNode()
            root.keys.set(letter, node)
            return this.add(word, node, ++i)
        }
        return this.add(word, root.keys.get(letter), ++i)
    }

    this.isWord = function (word, root = this.root, i = 0, result = '') {
        let letter = word[i]
        if (letter === undefined) {
            if (root.isEnd() && result === word) {
                return true
            } else {
                return false
            }
        }
        if (root.keys.get(letter) !== null) {
            result += letter
            return this.isWord(word, root.keys.get(letter), ++i, result)
        }
        return false
    }

    this.print = function (root = this.root, word = '', result = []) {
        if (root.isEnd()) {
            result.push(word)
        }
        for (let item of root.keys) {
            let letter = item[0]
            if (root.keys.get(letter)) {
                this.print(root.keys.get(letter), word + letter, result)
            }
        }

        return result



    }

};

let trie = new Trie
let node = new TrieNode
console.log(trie.add('code'))

console.log(trie.add('coder'))
console.log(trie.add('codes'))
console.log(trie.add('coding'))
console.log(trie.add('apple'))
console.log(trie.add('machine'))
console.log(trie.add('machines'))
console.log(trie.add('machete'))
console.log(trie.add('foot'))
console.log(trie.add('football'))
console.log(trie.add('footballer'))

// console.log(trie.root.keys)

// console.log('IS WORD: ', trie.isWord('coder'))
// console.log('////////////////////////////////////')
// console.log('IS WORD: ', trie.isWord('codes'))
console.log(trie.print())
