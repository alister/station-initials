// assets/js/greet.js
module.exports = function(stationCode) {
  if (stationCode === 'ace') {
    return 'A.C.E.!';
  }
  return `Sorry, '${stationCode}' is not known as a British Rail station code`;
};
