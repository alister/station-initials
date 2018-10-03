// assets/js/app.js
require('../css/app.css');
var StationCodes = require('./stationCodeLookup');

stationCodeHandler = function() {
  const dest = document.getElementById('stationCodeDisplay');
  const error = document.getElementById('stationCodeError');

  if (this.value === undefined || this.value === null) {
    dest.innerText = "nothing yet";
  } else {
    dest.innerText = this.value;
  }

  stationCodeResult.innerText = '-';
  if (this.value.length > 3) {
    error.innerText = "too many characters - only enter 3 letters";
  } else if (this.value.length < 3) {
    error.innerText = "Not enough characters - enter 3 letters";
  } else {
    error.innerText = "";
    stationCodeResult.innerText = StationCodes(this.value);
  }
};

onload = function () {
  const e = document.getElementById('stationCode');
  e.oninput = stationCodeHandler;
  e.onpropertychange = e.oninput; // for IE8
  // e.onchange = e.oninput; // FF needs this in <select><option>...
  // other things for onload()
};
