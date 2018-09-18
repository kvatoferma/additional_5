// module.exports =
function check(str, bracketsConfig) {
  // let brackets = str.split('');
  // console.log('brackets: ', brackets);
  // console.log('bracketsConfig: ', bracketsConfig);

  // console.log('config: ', bracketsConfig);
  let array = str.split('');

  let result = bracketsConfig.map(config => {
    return countBrackets(config);
  });
  // console.log('RESULT BEFORE REDUCE: ', result);
  result = result.reduce((sum, result) => {
    return sum = sum && result;
  });
  // console.log('RESULT MAIN: ', result);
  return result;

  function countBrackets(patterns) {
    // console.log('patterns: ', patterns);
    let counts = patterns.map(pattern => {
      return array.reduce((sum, item, i) => {
        //  idea: if (item === pattern) {
        //    sum.push(i);
        //  }
        //  return sum;
        //  [[4,5,6,],[1,2,3]] // array of arrays of indices
        //  check if sum[0][i] >= sum[1][i]
        //  then order is broken and main function should return false!

        
        return sum = (item === pattern) ? (sum + 1) : sum;
      }, 0);
    });
    // console.log('patterns: ', patterns, 'counts: ', counts);
    return (isMirror(patterns)) ? compare(counts) : isEven(counts[0]);
  }

  function compare(counts) {
    let result = (counts[0] === counts[1]) || false;
    // console.log('counts: ', counts);
    // console.log('compare diff brackets: ', result);
    return result;
  }

  function isMirror(pattern) {
    let result = (pattern[0] !== pattern[1]) || false;
    // console.log('braket set is mirror: ', result);
    return result;
  }

  function isEven(num) {
    let result = num % 2 === 0;
    // console.log('is even: ', result);
    return result;
  }



  // function checkPattern(pattern) {
  //   if (isMirror(pattern)) {
  //     return countMirrorBrackets(pattern);
  //   } else {
  //     return countSameBrackets(pattern);
  //   }
  // }


  // function countSameBrackets(pattern) {
  //   let count = array.reduce((sum, item) => {
  //     return sum = (item === pattern) ? (sum + 1) : sum;
  //   });
  // }

  // countMirrorBrackets(['(', ')']);
  // countMirrorBrackets(['[', ']']);
  // console.log('checkPattern () : ', checkPattern(['(', ')']));
  // console.log('checkPattern [] : ', checkPattern(['[', ']']));


// check('(())()', [['(', ')']]);

}

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];


console.log('3) expected: false; actual: ', check('())(', config1));
console.log('5) expected: false; actual: ', check('[(])', config2));
console.log('10) expected: false; actual: ', check('|(|)', config5));
console.log('13) expected: false; actual: ', check('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6));
console.log('14) expected: false; actual: ', check('8888877878887777777888888887777777887887788788887887777777788888888887788888', config6));
console.log('16) expected: false; actual: ', check('[]][[]', config3));
console.log('17) expected: false; actual: ', check('[]][[]', config2));
