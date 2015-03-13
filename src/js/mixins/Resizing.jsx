module.exports = {
  resizePresentation() {
    var windowSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
    document.body.style.zoom = this.getZoomFactor(this.getSizes(), windowSize);
  },

  getZoomFactor(slideSize, windowSize) {
    return Math.min(windowSize.width / slideSize.width, windowSize.height / slideSize.height);
  },
  componentDidMount() {
    this.resizePresentationBound = this.resizePresentation.bind(this);
    this.resizePresentation();
    window.addEventListener('resize', this.resizePresentationBound);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizePresentationBound);
  }
};