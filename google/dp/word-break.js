function wordBreak(s, wordDict) {
  let set = new Set();
  for (let word of wordDict) {
    set.add(word);
  }
  let mem = new Map();
  return helper(s);

  function helper(str) {
    if (str === '') return true;
    if (set.has(str)) return true;

    if (mem.has(str)) return mem.get(str);

    for (let i = 0; i < str.length; i++) {
      let left = str.slice(0, i);
      let right = str.slice(i);
      if (set.has(right) && helper(left)) {
        mem.set(str, true);
        return true;
      }
    }
    mem.set(str, false);
    return false;
  }
}

console.log(wordBreak('codeleet', ['leet', 'code']));

console.log(wordBreak('a', ['aaa']));

let A =
  'aababaaabaaababbbabbbaabababaaabbaabaabbabbaabbbbbbbabbbbabaaabaabaabbaaaaabbabaababbbabbbbbbaaaabbbaaaaaabaaaaaabbbbbbbabbbbbbbbaaabaaababbbaaaabaaaabaaaabbabbbabaabbabbabaaaabbabaaabbabbabbbabbabbaabbbabaabaabbbbbbbaabababbbbbbababbbaabaabbbabababbbbbaaaababbbabaaabaabbaababbbabbbbbaabbaaaaabbbbbaaaaaaaaaaaabbabbbabbaaabaaaaaabaabababaabaaaabaaabbbbbaaabbaabbababbabbbbaabaabaabaaaabbbaababbaabbbbbabaaababbabbbabbbbbabaababbbbbaabbbbabaabbabbababaaaabbbbabbbaaaabaabbbbaaaaababaaabaabbabaababbabbbababaaababbaabbbaaabaabbbaabbbbbbaaabaabbbbbabaaababaaabbbbbbaaaabababaaabbbbbbaabbaaabbbabaabbabababbabaabbaaabbaaabbaabbbbbababbaabbabbb';

let B = [
  'baaaaaabba',
  'babbaababb',
  'abb',
  'bababaabab',
  'baaa',
  'ab',
  'ab',
  'bb',
  'abbaaaa',
  'bbababa',
  'bbbbbbab',
  'abbaaabba',
  'aaaabbab',
  'abaaab',
  'babab',
  'aabaaab',
  'aabaabbabb',
  'aa',
  'bb',
  'ab',
  'a',
  'a',
  'bbaaab',
  'aba',
  'ba',
  'bbabbaabab',
  'aaabbbbbb',
  'abbaaaabbb',
  'aabaabbaa',
  'bbba',
  'abbabbba',
  'abbbbabb',
  'bbaaba',
  'abbbbaab',
  'bba',
  'bbbbaabba',
  'ababbabaab',
  'baabba',
  'ababbaabb',
  'bbaab',
  'a',
  'bbba',
  'aaaa',
  'aaabbbabba',
  'bab',
  'baaaabaa',
  'ab',
  'aaabbaab',
  'bab',
  'aa',
  'ababababab',
  'aabbaaaba',
  'abbaaba',
  'bbaabaa',
];

console.log(wordBreak(A, B));
