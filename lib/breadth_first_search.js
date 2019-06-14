function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();

    let q = [ startingNode ];

    while(q.length) {
        let node = q.shift();
        if(visited.has(node.val)) continue;
        if(node.val === targetVal) return node;
        visited.add(node.val);
        q.push(...node.neighbors);
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};