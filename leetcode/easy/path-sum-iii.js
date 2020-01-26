var pathSum = function(root, sum) {
    let paths = [];
    findPaths(root, sum, (current = []), paths);
    return paths.length;
};

function findPaths(root, sum, current, paths) {
    if (root === null) return;

    current.push(root.val);

    let temp = [];
    let total = 0;
    for (let i = current.length - 1; i >= 0; i--) {
        total = total + current[i];
        temp.unshift(current[i]);

        if (total === sum) {
            paths.push(temp);
        }
    }

    findPaths(root.left, sum, [...current], paths);
    findPaths(root.right, sum, [...current], paths);
}
