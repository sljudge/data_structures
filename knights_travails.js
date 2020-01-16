
const knightMoves = (start, end) => {
    const Node = function (value) {
        const convertXtoAlph = (x) => {
            switch (x) {
                case 0: return 'A';
                case 1: return 'B';
                case 2: return 'C';
                case 3: return 'D';
                case 4: return 'E';
                case 5: return 'F';
                case 6: return 'G';
                case 7: return 'H';
            }
        }

        this.x = value[0]
        this.y = value[1]
        this.key = convertXtoAlph(this.x) + this.y.toString()
        this.children = new Map(null)
    }
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]

    const search = (start, end) => {
        /*
        BREADTH FIRST SEARCH (HENCE QUEUE) TO CHECK ALL MOVES FROM CURRENT SQUARE.
        CHECK OFF MOVES IN GRAPH AND ADD AS CHILDREN TO ALLOW TRIE SEARCH FOR ROUTE.
        */
        let queue = [start]
        let searching = true
        while (searching) {
            node = queue.shift()
            let x = node.x
            let y = node.y

            board[y][x] = 1
            const children = [
                [x - 2, y - 1],
                [x - 2, y + 1],
                [x - 1, y - 2],
                [x - 1, y + 2],
                [x + 1, y - 2],
                [x + 1, y + 2],
                [x + 2, y - 1],
                [x + 2, y + 1]
            ]
            for (let child of children) {
                x = child[0]
                y = child[1]
                if (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
                    if (board[y][x] === 0) {
                        board[y][x] = 1
                        child = new Node(child)
                        node.children.set(child.key, child)
                        if (child.key === end.key) {
                            searching = false
                        }
                        queue.push(child)
                    }
                }
            }
        }
        return start
    }
    // const getRoute = (trie, output = [[trie.x, trie.y]]) => {
    const getRoute = (trie, output = [trie.key]) => {
        /*
        PERFORM TRIE SEARCH TO DETERMINE ROUTE
        */
        for (let item of trie.children) {
            let key = item[0]
            let node = item[1]
            //IF CO-ORDINATES MATCH THE END SQUARE THEN SET ROUTE TO OUTPUT
            if (key === end.key) {
                // output.push([node.x, node.y])
                output.push(node.key)
                route = output
            }
            //IF THERE ARE FURTHER POSSIBLE MOVES TO EXPLORE THEN REPEAT, ADDING ON CURRENT COORDINATE TO OUTPUT
            else if (node.children.size > 0) {
                // getRoute(node, output.concat([[node.x, node.y]]))
                getRoute(node, output.concat([node.key]))
            }
        }
    }

    start = new Node(start)
    end = new Node(end)
    let trie = search(start, end)
    let route
    getRoute(trie)
    return route
}

// console.log(knightMoves([3, 4], [2, 3]))
console.log(knightMoves([2, 6], [5, 4]))