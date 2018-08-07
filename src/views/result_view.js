const PubSub = require('../helpers/pub_sub.js');


const ResultView = function(container){
  this.container = container;
}

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  });
};

ResultView.prototype.render = function(instrument){
  const nameParagraph = document.createElement('p');
  const descriptionParagraph = document.createElement('p');
  const instrumentsParagraph = document.createElement('p');
  nameParagraph.textContent = `${instrument.name}`;
  descriptionParagraph.textContent = `${instrument.description}`;
  instrumentsParagraph.textContent = `${instrument.instruments}`;
  this.container.innerHTML = '';
  this.container.appendChild(nameParagraph);
  this.container.appendChild(descriptionParagraph);
  this.container.appendChild(instrumentsParagraph);
};

module.exports = ResultView;
