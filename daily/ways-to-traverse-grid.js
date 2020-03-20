function traverse(n, m) {

    if (n === 1)  return 1
    if (m === 1)  return  1
     
    return traverse(n-1,m)  + traverse(n, m-1)
}



console.log(traverse(4,5))