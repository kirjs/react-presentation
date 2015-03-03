class Resizing {
  constructor(slideSize) {
    this.slideSize = slideSize;
    this.resizePresentationBound = this.resizePresentation.bind(this);
    this.resizePresentation();
  }


  getZoomFactor(slideSize, windowSize) {
    return Math.min(windowSize.width / slideSize.width, windowSize.height / slideSize.height);
  }

  resizePresentation() {
    var windowSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };


    document.body.style.zoom = this.getZoomFactor(this.slideSize, windowSize);
  }

  attach() {
    window.addEventListener('resize', this.resizePresentationBound);
  }

  detach() {
    window.removeEventListener('resize', this.resizePresentationBound);
  }
}

module.exports = Resizing;