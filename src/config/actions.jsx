var actionNames = require('./actionNames');
module.exports = {
  nextSlide() {
    this.dispatch(actionNames.nextSlide);
  },
  previousSlide() {
    this.dispatch(actionNames.previousSlide);
  },
  updateSlides: function (slides) {
    this.dispatch(actionNames.updateSlides, slides);
  },
  updateSlideIndex(number) {
    this.dispatch(actionNames.updateSlideIndex, number);
  },
  useSingleRenderer() {
    this.dispatch(actionNames.updateRenderer, 'single');
  },
  useBookletRenderer() {
    this.dispatch(actionNames.updateRenderer, 'booklet');
  },
  usePreviewRenderer() {
    this.dispatch(actionNames.updateRenderer, 'preview');
  }
};
