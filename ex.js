 
// 7kyu Array Array
function explode(x) {
  const [a, b] = x;

  const first = typeof a === 'number';
  const second = typeof b === 'number';

  let score;

  if (first && second) {
    score = a + b;
  } else if (first) {
    score = a;
  } else if (second) {
    score = b;
  } else {
    return 'Void!';
  }

  return Array(score).fill(x);
}
 console.log(explode(['a',3]));
 console.log(explode([2,3]));
 console.log(explode(['a','b']));