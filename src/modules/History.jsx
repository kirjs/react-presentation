class History {
  constructor(store, slideIndexCallback) {
    this.store = store;
    this.slideIndexCallback = slideIndexCallback;
    this.updateSlideIndexCallback = this.updateSlideIndex.bind(this);
    this.updateSlideIndex();
    this.updateLocation();
  }

  updateSlideIndex() {
    var slideIndex = Number(window.location.hash.substr(1));
    if (!isNaN(slideIndex)) {
      this.slideIndexCallback(slideIndex);
    }
  }

  updateLocation() {
    var index = this.store.getState().slideIndex;
    var url = window.location.href;
    if (window.location.hash !== '') {
      url = url.replace(window.location.hash, '#' + index);
    } else {
      url = url + '#0';
    }
    history.pushState(null, null, url);
  }

  attach() {

    window.addEventListener('popstate', this.updateSlideIndexCallback);
    this.store.on('change', this.updateLocation.bind(this));

  }

  detach() {
    window.removeEventListener('popstate', this.updateSlideIndexCallback);
    store.removeListener('popstate', this.updateLocation);

  }
}

module.exports = History;