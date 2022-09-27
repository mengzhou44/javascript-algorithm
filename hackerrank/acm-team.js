function acmTeam(topic) {
  let decimals= topic.map((item) =>parseInt(item, 2));
 
  let total = decimals.length;
  let max = 0;
  let teams = 0;
  for (let i = 0; i < total; i++) {
    for (let j = i + 1; j < total; j++) {
      let knownTopics = getMaximumTopic(decimals, i, j);
      if (knownTopics > max) {
        max = knownTopics;
        teams = 1;
      } else if (knownTopics === max) {
        teams++;
      }
    }
  }
  return [max, teams];
}

function getMaximumTopic(decimals, i, j) {
  let temp = decimals[i] | decimals[j];
 
  let count = 0 
  let res=''
  while(temp> 0) {
    if  (temp %2 === 1) {
       count++
    }
  
    temp = Math.floor(temp/2) 
  }
 
  return count   
}

console.log(acmTeam(['10101', '11110', '00010']));
