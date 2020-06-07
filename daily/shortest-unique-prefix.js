// class Node {
//     constructor(val) {
//         this.val = val
//         this.children = new Map()
//         this.isEndOfWord = false
//     }
//     hasChild(c) {
//         return this.children.has(c)
//     }

//     addChild(c) {
//         this.children.set(c, new Node(c))
//     }

//     getChild(c) {
//         return this.children.get(c)
//     }

//     getChildren() {
//         return this.children.values()
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new Node('')
//     }

//     insert(word) {
//         let current = this.root
//         for (let c of word) {
//             if (!current.hasChild(c)) {
//                 current.addChild(c)
//             }
//             current = current.getChild(c)
//         }
//         current.isEndOfWord = true
//     }

//     remove(word) {
//         if (word === null) return
//         let current = this.root
//         for (let c of word) {
//             if (!current.hasChild(c)) {
//                 return
//             }
//             current = current.getChild(c)
//         }

//         current.isEndOfWord = false
//     }

//     contains(word) {
//         if (word === null) return false
//         let current = this.root
//         for (let c of word) {
//             if (!current.hasChild(c)) {
//                 return false
//             }
//             current = current.getChild(c)
//         }

//         return current.isEndOfWord
//     }

//     traverse(current = this.root) {
//         for (let child of current.getChildren()) {
//             this.traverse(child)
//         }
//         console.log(current.val)
//     }

//     findWords(prefix) {
//         let current = this.root
//         for (let c of prefix) {
//             current = current.getChild(c)
//             if (current === undefined) {
//                 return []
//             }
//         }

//         let words = []
//         function dfs(node, path = prefix) {
//             if (node.isEndOfWord) {
//                 words.push(path)
//             }
//             for (let child of node.getChildren()) {
//                 dfs(child, path + child.val)
//             }
//         }

//         dfs(current)

//         return words
//     }
// }

// function shortestUniquePrefix(words) {
//     let trie = new Trie()
//     for (let word of words) {
//         trie.insert(word)
//     }
//     let temp = []
//     for (let word of words) {
//         temp.push(findPrefix(word, trie))
//     }

//     return temp
// }

// function findPrefix(word, trie) {
//     let i = 1
//     let prefix = word.substring(0, i)
//     while (trie.findWords(prefix).length > 1) {
//         i++
//         prefix = word.substring(0, i)
//     }

//     return prefix
// }

function shortestUniquePrefix(words) {
    let map = new Map()
    let result = []
    for (let word of words) {
        let prefix = findPrefix(words, word, map)
        result.push(prefix)
    }
    return result
}

function findPrefix(words, word) {
    let currentIndex = 1
    let prefix = word.substring(0, currentIndex)

    let found = words.filter((item) => item.startsWith(prefix))
    while (found.length > 1) {
        currentIndex++
        prefix = word.substring(0, currentIndex)
        console.log('step', prefix)
        found = words.filter((item) => item.startsWith(prefix))
    }

    return prefix
}

let words = ['joma', 'john', 'jack', 'techlead']

console.log(shortestUniquePrefix(words))
