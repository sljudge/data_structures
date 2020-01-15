// Create a social network as an undirected graph with 4 nodes/people named James, Jill, Jenny, and Jeff. There are edges/relationships between James and Jeff, Jill and Jenny, and Jeff and Jenny.

var undirectedAdjList = {
    'James': ['Jeff'],
    'Jill': ['Jenny'],
    'Jenny': ['Jill', 'Jeff'],
    'Jeff': ['James', 'Jenny']
};

var undirectedGArr = [
    [1, 2], // Node1
    [0],    // Node2
    [0]     // Node3
];

//Directed means that any link stated has direction from key to value