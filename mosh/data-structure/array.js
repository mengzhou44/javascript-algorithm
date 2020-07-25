class MyArray {
    constructor() {
        this.data =  []
    }

    insert(val) {
        this.data.push(val)
    }

    removeAt(index) {
        this.data = this.data.filter((item, i) => i !== index)
    }

    indexOf(val) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === val) {
                return i
            }
        }
        return -1
    }

    max() {
       let result = Number.MIN_SAFE_INTEGER
       for(let num of this.data) {
          result = Math.max(result, num)
       }
       return result
    }

    intersect(array) {
       
    }

    print() {
       return `[${this.data.join(',')}]`
    }

    insertAt(index, val) {
      let newArray = []
      for(let i=0; i< this.data.length; i++) {  
          if (i=== index) {
            newArray.push(val)
          }
          newArray.push(this.data[i])
          
      }
      this.data = newArray
    }


}


let array = new MyArray(3)
array.insert(10)
array.insert(20)
array.insert(30)

console.log(array.print())
console.log(array.indexOf(20))
console.log(array.max())

array.insertAt(1, 15)
console.log(array.print())



