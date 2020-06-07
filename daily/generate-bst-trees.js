class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }

    toString() {
        let result = this.val
        if (this.left) {
            result += this.left.toString()
        }
        if (this.right) {
            result += this.right.toString()
        }
    }
}

function creatBSTtrees(n) {
    let roots = []
    for (let i = 1; i <= n; i++) {
        let temp = createBSTtreesOnRoot(i, n)
        roots = [...roots, ...temp]
    }
    for (let root of roots) {
        console.log(root.toString())
    }
}

function createBSTtreesOnRoot(i, n) {
   let root = new Node(i)
   
}
