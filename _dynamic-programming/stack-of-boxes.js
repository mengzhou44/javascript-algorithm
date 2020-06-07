function createStack(boxes){
    boxes.sort((a,b)=> b.height-a.height)
    let maxHeight = 0 
    for(let i=0; i<boxes.length; i++) {
         createStackHelper(boxes,i)
    }

    function createStackHelper(boxes, bottomIndex, cache = new Map()) {
       
        if (bottomIndex< boxes.length && cache.has(bottomIndex)) {
            return cache.get(bottomIndex)
        }
        for(let i=bottomIndex+1; i<boxes.length; i++) {
             if canBeAbove(boxes)
        }
        cache.set(bottom)
    }

    return maxHeight
}