class DisjointSet {
    constructor(N) {
        this.parents = new Array(N)
        for (let i = 0; i < N; i++) {
            this.parents[i] = i
        }
    }

    findRoot(x) {
       if (this.parents[x] !== x) {
           this.parents[x] = this.findRoot(this.parents[x])
       }
       return this.parents[x]
    }

    union(x, y) {
        let rootOfX =  this.findRoot(x)
        let rootOfY =  this.findRoot(y)

        if (rootOfX === rootOfY)  return 

        this.parents[rootOfX] = rootOfY
    }
}


let set = new DisjointSet(4)
set.union(0,1)
set.union(1,2)
console.log(set.findRoot(1)=== set.findRoot(2))
console.log(set.findRoot(1)=== set.findRoot(3))
