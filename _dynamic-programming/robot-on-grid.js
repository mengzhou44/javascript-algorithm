class Point {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    print() {
        return `${this.row}, ${this.col}`;
    }
}
function getPath(maze) {
    if (maze === null || maze.length === 0) return null;

    let path = [];

    if (helper(maze, maze.length - 1, maze[0].length - 1, path)) {
        return path;
    }

    return null;
}

function helper(maze, row, col, path) {
    if (col < 0 || row < 0 || maze[row][col] === 0) {
        return false;
    }

    if (row === 0 && col === 0) {
        path.push(new Point(0, 0));
        return true;
    } else if (
        helper(maze, row - 1, col, path) ||
        helper(maze, row, col - 1, path)
    ) {
        path.push(new Point(row, col));
        return true;
    }

    return false;
}

let maze = [
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1]
];

let path = getPath(maze);

console.log(path);
