module.exports =
function check(str, bracketsConfig) {
  const array = str.split('');

//   let result = bracketsConfig.map(config => {
//     return countBrackets(config);
//   });
//   result = result.reduce((sum, result) => {
//     return sum = sum && result;
//   });
//   return result;
//
//   function countBrackets(patterns) {
//     // console.log('patterns: ', patterns);
//     let counts = patterns.map(pattern => {
//       return array.reduce((sum, item, i) => {
//          if (item === pattern) {
//            sum.push(i);
//          }
//          return sum;
//       }, []);
//              // console.log('pattern: ', pattern);
//     });
//     // console.log('counts: ', counts);
//
//     let result = countLength(counts);
//     // console.log('array: ', JSON.stringify(array));
//     // console.log('result: ', result);
//     if (checkOrder(counts)) {
//       return isMirror(patterns) ? compare(result) : isEven(result[0]);
//     } else return false;
//   }
//
//   function compare(counts) {
//     let result = (counts[0] === counts[1]) || false;
//     return result;
//   }
//
//   function isMirror(pattern) {
//     let result = (pattern[0] !== pattern[1]) || false;
//     return result;
//   }
//
//   function isEven(num) {
//     let result = num % 2 === 0;
//     return result;
//   }
//
//
//   function checkOrder(array) {
//     return array[0].reduce((sum, item, index) => {
//       return sum = sum && (item < array[1][index]);
//     }, true);
//   }
//
//   function countLength(array) {
//     return array.map( set => {
//       return set.length;
//     });
//   }
// }

//*************************
//
const patterns = bracketsConfig.map(config => {
  return patternFactory(array, config);
});

const result = patterns.reduce((sum, pattern, i) => {
  return sum = sum && pattern.isValid;
}, true);

return result;
// function checkInvasion() {
//   let result = false;
//   let patternsCopy = patterns;
//   for (var i = 0; i < patterns.length; i++) {
//     for (var j = 0; j < patterns.length; i++) {
//       if (patterns[i].pattern !== patterns[j].pattern) {
//         if (patterns[i].sequence[j][] > patterns[j].sequence
//       }
//     }
//   }
// }








function patternFactory(brackets, pattern) {
  const sequence = pattern.map(pattern => {
    return brackets.reduce((sum, item, i) => {
      if (item === pattern) {
        sum.push(i);
      }
      return sum;
    }, []);
  });

  const isTwin = pattern[0] === pattern[1] || false;

  function checkOrientation() {
    return sequence[0].reduce((sum, item, index) => {
      return sum = sum && (item < sequence[1][index]);
    }, true);
  }

  const isOrientated = (!isTwin) ? checkOrientation() : true;

  function countSequenceLength() {
    return sequence.map(item => {
      return item.length;
    });
  }

  const sequenceLength = countSequenceLength();

  function compare(lens) {
    return lens[0] === lens[1] || false;
  }

  function isEven(num) {
    return num % 2 === 0;
  }

  function checkQuantity() {
    return (isTwin) ? isEven(sequenceLength[0]) : compare(sequenceLength);
  }

  const quantityIsOK = checkQuantity();

  const isValid = quantityIsOK && isOrientated;

  return {sequence, pattern, isTwin, isOrientated, quantityIsOK, isValid}
}

// class Pattern {
//   constructor(brackets, patternSet) {
//     this.sequence = makeSequence(brackets);
//     this.patternSet = patternSet;
//   }
//   makeSequence(brackets) {
//     return {
//       this.patternSet.map(pattern => {
//         return brackets.map((bracket, index) => {
//           if (bracket === brackets[index]) return index;
//         });
//       });
//     }
//   }
// }
//
// let pat = new Pattern(['(','(',')',')'], ['(', ')']);
// console.log('sequence: ', pat.sequence);
// console.log('patternSet: ', pat.patternSet);

// patterns.forEach((pattern, i) => {
//   console.log(i+1 + ' pattern is ', JSON.stringify(pattern));
// });


}


// let pat = patternFactory(['(','(',')',')'], ['(', ')']);
// console.log('pat.sequence: ', pat.sequence);
// console.log('pat.pattern: ', pat.pattern);
// console.log('pat.isTwin: ', pat.isTwin);
// console.log('pat.isOrdered(): ', pat.isOrdered());



// 1) Для каждого шаблона создаем объект:
// ***** patternFactory(sequence, pattern) {
// return
//    {
//      pattern: [bracket1, bracket2],
//      sequence: [[1, ...],[2, ...]],
//      checkOrder: function(...) {...}
//      isTwin: function(...) {...}
//      countBrackets: function(...) {...}
//      countBracketPairs: function(...) {...}
//    };
// }
// 2) Создаем массив из объектов:
// patterns = [ {...}, {...}, ... ]
// 3) Определяем тип каждого шаблона (парные скобки или одинаковые):
// patterns.forEach( pattern => pattern.checkType)
// 4) Проверяем порядок следования скобок для каждого парного шаблона
// patterns.forEach(pattern => pattern.checkOrder())
// checkOrder() { '()' - true, ')(' - false }
// 5) Проверяем не налезает ли один шаблон на другой:
// function checkGlobalOrder() {
//
// }
// 6) Считаем кол-во скобок в каждом паттерне:
// patterns.forEach(pattern => pattern.countBrackets())


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
// console.log(check('()()(', config1));
// console.log('13) expected: false; actual: ', check('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6));
// console.log('14) expected: false; actual: ', check('8888877878887777777888888887777777887887788788887887777777788888888887788888', config6));
// console.log('16) expected: false; actual: ', check('[]][[]', config3));
// console.log('17) expected: false; actual: ', check('[]][[]', config2));
