// module.exports =
function check(str, bracketsConfig) {
  // let brackets = str.split('');
  // console.log('brackets: ', brackets);
  // console.log('bracketsConfig: ', bracketsConfig);
}
  let str = '(())()';
  let array = str.split('');

  function countItems(patterns) {
    let count = patterns.map(pattern => {
      return array.reduce((sum, item) => {
        return sum = (item === pattern) ? (sum + 1) : sum;
      }, 0);
    });
    console.log('patterns: ', patterns, 'count: ', count);
    return count;
  }

  function paired(count) {
    return (count[0] === count[1]) || false;
  }

  countItems(['(', ')']);
  countItems(['[', ']']);
  console.log('paired [1,2]', paired([1,2]));
  console.log('paired [2,2]', paired([2,2]));


// check('(())()', [['(', ')']]);
