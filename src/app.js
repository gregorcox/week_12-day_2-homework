const Instruments = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');


  const instrumentsDropdown = new SelectView(selectElement);
  instrumentsDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-info')
  const instrumentInfoDisplay = new ResultView(infoDiv);
  instrumentInfoDisplay.bindEvents();
  console.log(instrumentInfoDisplay);

  const instrumentDataSource = new Instruments();
  instrumentDataSource.bindEvents();



});
