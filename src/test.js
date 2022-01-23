// function angleBetweenClockHands(date) {
//   let dates = new Date(date)
//   const hour = dates.getUTCHours();
//   const minutes = dates.getUTCMinutes();
//   let result = Math.abs((hour * 30 + minutes * 0.5) - (minutes * 6))
//   return Math.min(result - 360, result)
// }

// angleBetweenClockHands(Date.UTC(2016, 3, 5, 23, 55))
// /*
// *    Date.UTC(2016,2,5, 0, 0) => 0
// *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
// *    Date.UTC(2016,3,5,18, 0) => Math.PI
// *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
// */
