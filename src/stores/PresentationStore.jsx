var Fluxxor = require('fluxxor');
var actionNames = require('../config/actionNames');
var React = require('react');

module.exports = Fluxxor.createStore({
    getState: function () {
      return {
        slideIndex: this.slideIndex
      }
    },

    initialize() {
      this.slideIndex = 0;
      this.slides = [];

      this.bindActions(
        actionNames.nextSlide, this.nextSlide,
        actionNames.previousSlide, this.previousSlide,
        actionNames.updateSlides, this.updateSlides,
        actionNames.updateSlideIndex, this.updateSlideIndex
      )
    },
    getAllSlides: function () {
      return this.slides;
    },
    getCurrentSlide: function () {
      return this.slides[this.slideIndex] || null;
    },

    updateSlides(slides) {
      this.slides = slides;
      this.emit("change");
    },
    isValidSlideIndex(index) {
      return index >= 0 && index < this.slides.length;
    },
    updateSlideIndex(index) {
      if (this.isValidSlideIndex(index)) {
        this.slideIndex = index;
        this.emit("change");
      }
    },
    previousSlide() {
      this.updateSlideIndex(this.slideIndex - 1);
    },
    nextSlide() {
      this.updateSlideIndex(this.slideIndex + 1);
    }
  }
);