class Node {
  constructor(letter) {
    this.endOfWord = false;
    this.map = new Map();
    this.letter = letter;
  }

  addChild(ch) {
    this.map.set(ch, new Node(ch));
  }

  hasChild(c) {
    return this.map.has(c);
  }

  getChild(c) {
    return this.map.get(c);
  }
  getChildren() {
    return this.map.values();
  }
}

class Trie {
  constructor() {
    this.root = new Node('');
  }

  insertWord(word) {
    let cur = this.root;
    for (let c of word) {
      if (!cur.hasChild(c)) {
        cur.addChild(c);
      }
      cur = cur.getChild(c);
    }
    cur.endOfWord = true;
  }

  removeWord(word) {
    let cur = this.root;
    for (let c of word) {
      if (!cur.hasChild(c)) {
        cur.addChild(c);
      }
      cur = cur.getChild(c);
    }
    cur.endOfWord = false;
  }

  containsWord(word) {
    let cur = this.root;
    for (let c of word) {
      if (!cur.hasChild(c)) {
        return false;
      }
      cur = cur.getChild(c);
    }
    return cur.endOfWord === true;
  }

  countWords() {
    let count = 0;
    dfs(this.root);

    return count;

    function dfs(node) {
      if (node.endOfWord) {
        count++;
      }
      for (let child of node.getChildren()) {
        dfs(child);
      }
    }
  }

  findWords(prefix) {
    let cur = this.root;
    for (let ch of prefix) {
      if (!cur.hasChild(ch)) {
        console.log('?', ch)
        return [];
      }
      cur = cur.getChild(ch);
      console.log(cur.letter)
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

let trie = new Trie();
trie.insertWord('c');
trie.insertWord('cat');
trie.insertWord('category');
trie.insertWord('bob');

// console.log(trie.countWords());

// console.log(trie.countWords());

// console.log(trie.findWords('c'));
console.log(trie.findWords('category'));
