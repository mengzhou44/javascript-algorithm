function  secondValues(arr) {
    let items = [...new Set(arr)].sort((a,b)= a-b))
    if (items.length === 0) return '' 
    if (items.length === 1) return `${values[0]}`
   
    return `${values[1]} ${values[items.length-2]}`
}