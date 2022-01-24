// // function angleBetweenClockHands(date) {
// //   let dates = new Date(date)
// //   const hour = dates.getUTCHours();
// //   const minutes = dates.getUTCMinutes();
// //   let result = Math.abs((hour * 30 + minutes * 0.5) - (minutes * 6))
// //   return Math.min(result - 360, result)
// // }

// // angleBetweenClockHands(Date.UTC(2016, 3, 5, 23, 55))
// // /*
// // *    Date.UTC(2016,2,5, 0, 0) => 0
// // *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
// // *    Date.UTC(2016,3,5,18, 0) => Math.PI
// // *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
// // */
// /*
// *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
//  *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
//  *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
//  *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
//  */
// // function getCommonDirectoryPath(pathes) {
// // //   pathes.map((path) => {
// // //     let splitedPath = path.split('/').reverse();
// // // console.log('%ctest.js line:25 splitedPath', 'color: #007acc;', splitedPath);
// // //   }  )
// // let newPathes = []
// //   for (let i = 0; i < pathes.length; i++) {
// //  newPathes.push(pathes[i].split('/').reverse())
// //     console.log(newPathes)
// //   }
// //   console.log('%ctest.js line:23 newPathes', 'color: #007acc;', newPathes);
// // }

// // getCommonDirectoryPath(['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'])

// // function getDigitalRoot(num) {
// //   console.log('%ctest.js line:38 Array.from(num)', 'color: #007acc;',)
// //   let numArray = Array.from(num.toString())
// //   let sum = numArray.reduce((sum, number) => {return +sum + +number});
// //   if (String(sum).length > 1) {
// //   }
// //   return Array.from(num.toString())
// //   // throw new Error('Not implemented');
// // }
// // getDigitalRoot(12345)
// /*
// *   79927398713      => true
// *   4012888888881881 => true
// *   5123456789012346 => true
// *   378282246310005  => true
// *   371449635398431  => true
// *
// *   4571234567890111 => false
// *   5436468789016589 => false
// *   4916123456789012 => false
// */
// // function isCreditCardNumber(ccn) {
//   //   let sum = 0;
//   //   const num = ccn.toString()
//   //   //String(ccn).replace(/\D/g, '');
//   //   const isOdd = num.length % 2 !== 0;

//   //   for (let i = 0; i < num.length; i += 1) {
//   //     let n = Number(num[i]);

//   //     sum += 0 === (i % 2) && 9 < (n *= 2) ? (n - 9) : n;
//   //     // result += (isOdd | 0) === (i % 2) && (n *= 2) > 9 ? (n - 9) : n;
//   //   }
//   // // }
//   // console.log('%ctest.js line:68 ', 'color: #007acc;', (sum % 10) === 0);
//   // return (sum % 10) === 0;
//   // var ch = 0,
//   //   num = ccn.toString()
//   // if ('' === num) return false;
//   // for (let i = 0; i < num.length; i += 1)    {
//   //   let n = parseInt(num[i], 10);
//   //   ch += 0 === (i % 2) && 9 < (n *= 2) ? (n - 9) : n;
//   // }
//   // console.log('%ctest.js line:80 object', 'color: #007acc;', 0 == (ch % 10));
//   // return 0 == (ch % 10);

// //   let arr = (ccn + '')
// //     .split('')
// //     .reverse()
// //     .map(x => parseInt(x));
// //   let lastDigit = arr.splice(0, 1)[0];
// //   let sum = arr.reduce((acc, val, i) =>
// (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
// //   sum += lastDigit;
// //   console.log(sum % 10 === 0);
// //   return sum % 10 === 0;
// // }
// // isCreditCardNumber(371449635398431)


/**
 * Returns the number of positive numbers from specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
//  function getPositivesCount(arr) {
//   let result = [];
//   arr.map((item) => {
//     if (typeof item === "number" && item > 0) {
//       result.push(item)
//     }
//   })
//   console.log(result.length)
//   return result.length
// }
// getPositivesCount([ 1, '2' ])
