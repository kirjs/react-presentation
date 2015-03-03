var actions = require('./../config/actions.jsx');
class History {
  constructor(store, slideNumberCallback) {
    this.store = store;
    window.addEventListener('popstate', function () {
      var slideNumber = Number(window.location.hash.substr(1));
      if (!isNaN(slideNumber)) {
        slideNumberCallback(slideNumber);
      }
    });
    store.on('change', this.updateSlideIndex.bind(this))
  }

  updateSlideIndex(number) {
    var index = this.store.getState().slideIndex;
    var url = window.location.href;
    if (window.location.hash !== '') {
      url = url.replace(window.location.hash, '#' + index);
    } else {
      url = url + '#0';
    }

    history.pushState(null, null, url);
  }

}

module.exports = History;