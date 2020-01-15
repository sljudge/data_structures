function bfs(graph, root) {

    let nodeLens = {}
    //INITIATE LENGTHS OBJECT WITH 0 FOR ROOT NODE AND ASSUMING INFINITY FOR OTHERS
    for (let i = 0; i < graph.length; i++) {
        if (i === root) {
            nodeLens[i] = 0
        } else {
            nodeLens[i] = Infinity
        }
    }

    let queue = [root]
    while (queue.length > 0) {
        //DEQUEUE AND FIND CHILDREN NODES
        let current = queue.shift()
        let children = []
        let childIndex = graph[current].indexOf(1)
        while (childIndex !== -1) {
            children.push(childIndex)
            childIndex = graph[current].indexOf(1, childIndex + 1)
        }
        //LOOP THROUGH CHILDREN AND MAKE ENTRIES WHERE NECESSARY
        for (let i = 0; i < children.length; i++) {
            if (nodeLens[children[i]] === Infinity) {
                queue.push(children[i])
                nodeLens[children[i]] = nodeLens[current] + 1
            }
        }
    }

    return nodeLens

};

var exBFSGraph = [          //ADJACENCY MATRIX GRAPH
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];
// console.log(bfs(exBFSGraph, 1));

///////////////////////////////////////////////////

const startNode1 = 1
const input1 = [                       //                        
    [0, 1, 0, 0],                      //       
    [1, 0, 1, 0],                      //    1 -> 2 -> 3 -> 4
    [0, 1, 0, 1],                      //        
    [0, 0, 1, 0]                       //
]
const output1 = { 0: 1, 1: 0, 2: 1, 3: 2 }
// console.log(bfs(input1, startNode1))

//////////////////////////////////////////////////////

const startNode2 = 1
const input2 = [                       //               1
    [0, 1, 0, 0],                      //           2
    [1, 0, 1, 0],                      //        3
    [0, 1, 0, 0],                      //                     4
    [0, 0, 0, 0]                       //
]
const output2 = { 0: 1, 1: 0, 2: 1, 3: Infinity }
// console.log(bfs(input2, startNode2))

//////////////////////////////////////////////////////

const startNode3 = 0
const input3 = [                       //               1
    [0, 1, 0, 0],                      //           2
    [1, 0, 1, 0],                      //       3
    [0, 1, 0, 1],                      //   4
    [0, 0, 1, 0]                       //
]
const output3 = { 0: 0, 1: 1, 2: 2, 3: 3 }
// console.log(bfs(input3, startNode3))

const undirectedAdjacencyMatrix = [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],         //relationships are between the first and fourth node, the first 
    [1, 0, 0, 0, 1],         // and third node, the third and fifth node, and the fourth and fifth node.
    [1, 0, 0, 0, 1],
    [0, 0, 1, 1, 0]
]
console.log(bfs(undirectedAdjacencyMatrix, 3))

