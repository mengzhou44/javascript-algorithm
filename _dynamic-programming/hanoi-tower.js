 class Tower {
      constructor() {
           this.disks = []
      }

      peek() {
         if (this.disks.length === 0) {
              return null
         }
         return this.disks[this.disks.length-1]
      }

      addDisk(d){
          if (this.disks.length === 0) {
              this.disks.push(d)
          } else {
              if (this.peek()<d)  {
                   throw new Error('Error occured!')
              }
              this.disks.push(d)
          }
      }

      moveTopDiskTo(t) {
          let disk= this.disks.pop()
          t.addDisk(disk)
      }

      moveDisks(quantity, dest, buffer) {
           if (quantity === 0)  return 
           this.moveDisks(quantity-1, buffer, dest)
           this.moveTopDiskTo(dest)
           buffer.moveDisks(quantity-1, dest, this)
      }
 }


 let towerA = new Tower()
 towerA.addDisk(4)
 towerA.addDisk(3)
 towerA.addDisk(2)
 towerA.addDisk(1)

 let towerB =  new Tower()
 let towerC =  new Tower()

 towerA.moveDisks(4,towerB, towerC)

 console.log(towerB.disks)

