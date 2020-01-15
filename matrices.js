/*
    ADJACENCY LIST
*/


var undirectedAdjList = {
    // Create a social network as an undirected grap with 4 nodes/people named James, Jill, Jenny, and Jeff. There are edges/relationships between James and Jeff, Jill and Jenny, and Jeff and Jenny.
    'James': ['Jeff'],
    'Jill': ['Jenny'],
    'Jenny': ['Jill', 'Jeff'],
    'Jeff': ['James', 'Jenny']
};

/*
    UNDIRECTED GRAPH
*/
//      (Directed means that any link stated has direction from key to value)

var undirectedGArr = [
    [1, 2], // Node1
    [0],    // Node2
    [0]     // Node3
];




/*
    ADJACENCY MATRIX
    1 2 3
------------
1 | 0 1 1
2 | 1 0 0
3 | 1 0 0

*/


var adjMat = [              //First node is connected to second and third nodes
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 0]
];

var adjMatDirected = [     //First node has edge poiting to second node and second node has edge pointing to third node
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 0]
];

const undirectedAdjacencyMatrix = [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],         //relationships are between the first and fourth node, the first 
    [1, 0, 0, 0, 1],         // and third node, the third and fifth node, and the fourth and fifth node.
    [1, 0, 0, 0, 1],
    [0, 0, 1, 1, 0]
]

/*
INCIDENCE MATRIX

    1
---------             edge between nodes 1 and 3
1 | 1
2 | 0
3 | 1

    1 2 3 4
-------------        four nodes and four edges
1 | 0 1 1 1
2 | 1 1 0 0
3 | 1 0 0 1
4 | 0 0 1 0

*/

var incidenceMatrixUndirected = [       //columns are unique edges
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0]
];
