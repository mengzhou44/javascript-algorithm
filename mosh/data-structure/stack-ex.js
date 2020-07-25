class TwoStacks {
    constructor() {
        this.array = ['|']
    }

    push1(val) {
        this.array.unshift(val)
    }

    pop1(val) {
        if (this.array[0] !== '|') {
            return this.array.shift()
        }
    }

    push2(val) {
        this.array.push(val)
    }

    pop2(val) {
        if (this.array[0] !== '|') {
            return this.array.pop()
        }
    }
}

let twoStacks = new TwoStacks()
twoStacks.push1(1)
twoStacks.push1(2)
twoStacks.push1(3)
twoStacks.push1(4)

twoStacks.push2(10)
twoStacks.push2(20)
twoStacks.push2(30)
twoStacks.push2(40)

console.log(twoStacks.pop1())
console.log(twoStacks.pop2())

class MinStack {
    constructor() {
        this.array = []
        this.min = []
    }
    
    push(x) {
        if (this.min.length === 0 || this.min[this.min.length - 1] >= x) {
            this.min.push(x)
        }
        this.array.push(x)
    }
    pop() {
        if (this.array.length === 0) return

        if (
            this.min[this.min.length - 1] === this.array[this.array.length - 1]
        ) {
            this.min.pop()
        }

        this.array.pop()
    }

    top() {
        if (this.array.length === 0) return null
        return this.array[this.array.length - 1]
    }

    getMin() {
        if (this.min.length === 0) return null
        return this.min[this.min.length - 1]
    }
}
