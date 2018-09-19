module.exports =
function check(str, bracketsConfig) {
  let array = str.split('');

  let result = bracketsConfig.map(config => {
    return countBrackets(config);
  });
  result = result.reduce((sum, result) => {
    return sum = sum && result;
  });
  return result;

  function countBrackets(patterns) {
    // console.log('patterns: ', patterns);
    let counts = patterns.map(pattern => {
      return array.reduce((sum, item, i) => {
         if (item === pattern) {
           sum.push(i);
         }
         return sum;
      }, []);
             // console.log('pattern: ', pattern);
    });
    // console.log('counts: ', counts);

    let result = countLength(counts);
    // console.log('array: ', JSON.stringify(array));
    // console.log('result: ', result);
    if (checkOrder(counts)) {
      return isMirror(patterns) ? compare(result) : isEven(result[0]);
    } else return false;
  }

  function compare(counts) {
    let result = (counts[0] === counts[1]) || false;
    return result;
  }

  function isMirror(pattern) {
    let result = (pattern[0] !== pattern[1]) || false;
    return result;
  }

  function isEven(num) {
    let result = num % 2 === 0;
    return result;
  }


  function checkOrder(array) {
    return array[0].reduce((sum, item, index) => {
      return sum = sum && (item < array[1][index]);
    }, true);
  }

  function countLength(array) {
    return array.map( set => {
      return set.length;
    });
  }
}


// console.log('checkOrder [1,2],[2,3] => true: ', checkOrder([[1,2],[2,3]]));
// console.log('checkOrder [2,3],[1,2] => false: ', checkOrder([[2,3],[1,2]]));

// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];


// console.log('3) expected: false; actual: ', check('())(', config1));
// console.log('5) expected: false; actual: ', check('[(])', config2));
// console.log('10) expected: false; actual: ', check('|(|)', config5));
// console.log('13) expected: false; actual: ', check('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6));
// console.log('14) expected: false; actual: ', check('8888877878887777777888888887777777887887788788887887777777788888888887788888', config6));
// console.log('16) expected: false; actual: ', check('[]][[]', config3));
// console.log('17) expected: false; actual: ', check('[]][[]', config2));
