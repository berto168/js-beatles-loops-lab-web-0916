function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  for (let i = array.length; i < musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`;
    array.push(string);
  }
  return array;
}

function johnLennonFacts(facts) {
  let i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = new Array();
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}
