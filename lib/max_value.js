function maxValue(node, visited=new Set()) {

    let q = [ node ];
    let max = 0;
    while(q.length) {
        let node = q.shift();
        if(visited.has(node.val)) continue;
        if(node.val > max) max = node.val;
        visited.add(node.val);
        q.push(...node.neighbors);
    }

    return max;

}

module.exports = {
    maxValue
};