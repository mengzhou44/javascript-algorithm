class Node {
  constructor(val) {
    this.val = val;
    this.children = new Map();
    this.endOfWord = false;
  }

  hasChild(c) {
    return this.children.has(c);
  }

  addChild(c) {
    this.children.set(c, new Node(c));
  }

  getChild(c) {
    return this.children.get(c);
  }

  getChildren() {
    return this.children.values();
  }
}

class Trie {
  constructor() {
    this.root = new Node('');
  }

  insert(word) {
    let current = this.root;
    for (let c of word) {
      if (!current.hasChild(c)) {
        current.addChild(c);
      }
      current = current.getChild(c);
    }
    current.isEndOfWord = true;
  }

  remove(word) {
    let current = this.root;
    for (let c of word) {
      if (!current.hasChild(c)) {
        current.addChild(c);
      }
      current = current.getChild(c);
    }
    current.isEndOfWord = false;
  }

  contains(word) {
    let current = this.root;
    for (let c of word) {
      if (!current.hasChild(c)) {
        return false;
      }
      current = current.getChild(c);
    }
    return current.isEndOfWord === true;
  }

  countWords() {
    let current = this.root;
    let count = 0;
    traverse(current);
    return count;
    function traverse(current) {
      if (current.isEndOfWord) {
        count++;
      }
      for (let child of current.getChildren()) {
        traverse(child);
      }
    }
  }

  findWords(prefix) {
    let cur = this.root;
    for (let ch of prefix) {
      if (!cur.hasChild(ch)) {
        return [];
      }
      cur = cur.getChild(ch);
    }
    let words = [];
    dfs(cur);

    return words;

    function dfs(node, path = prefix) {
      if (node.endOfWord) {
        words.push(path);
      }
      for (let child of node.getChildren()) {
        dfs(child, path + child.letter);
      }
    }
  }
}

function longestCommonPrefix(words) {
  let trie = new Trie();

  for (let word of words) {
    trie.insert(word);
  }
  let current = trie.root;
  let prefix = '';

  while (current) {
    let children = Array.from(current.getChildren());
    if (children.length === 1) {
      current = children[0];
      prefix += current.val;
    } else if (children.length > 1) {
      return prefix;
    }
  }

  return prefix;
}

let trie = new Trie();
trie.insert('car');
trie.insert('care');
trie.insert('careful');
trie.insert('card');


console.log(trie.contains('ght'))
console.log(trie.contains('cat'))

console.log(trie.countWords())
console.log(trie.findWords('care'))
console.log(trie.findWords('cargo'))

console.log(longestCommonPrefix(['cat', 'tea', 'car', 'cart', 'card']));
