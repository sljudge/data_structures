function dfs(graph, root, currentLevel = graph[root], output = []) {
    //IF FIRST ITERATION ADD ROOT TO OUTPUT
    if (output.length === 0) {
        output.push(root)
    }
    //LOOP THROUGH CURRENT LEVEL SEARCHING FOR EDGES
    for (let i = 0; i < graph.length; i++) {
        if (currentLevel[i] == 1) {
            //ADD EDGE TO OUTPUT
            output.push(i)
            //USE BINARY AND SUBTRACTION TO DETERMINE IF NEXT NODE HAS EDGES OTHER THAN ROOT
            let A = parseInt(graph[i].join(''), 2)
            let B = Math.pow(2, (graph.length - 1) - root)
            if (A - B !== 0) {
                //IF FURTHER EDGES ARE FOUND THEN CREATE NEW ITERABLE EXCLUDING CURRENT LEVEL
                let iterable = (A ^ B).toString(2).split('')
                while (iterable.length < graph.length) {
                    iterable.splice(0, 0, 0)
                }
                //RECURSIVELY ITERATE THROUGH EDGES
                dfs(graph, i, iterable, output)
            }
        }
    }
    return output
}

var exDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];
// console.log(dfs(exDFSGraph, 3));

exDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
]
// console.log(dfs(exDFSGraph, 1)); // 0, 1, 2, and 3.

exDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
]
// console.log(dfs(exDFSGraph, 1)); // output.length === 4.

exDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0]
]
// console.log(dfs(exDFSGraph, 3)); // 2,3.


