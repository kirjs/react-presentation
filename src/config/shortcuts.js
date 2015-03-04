var actions = require('./actions.jsx');
module.exports = {
  'page down': actions.nextSlide,
  'right': actions.nextSlide,
  'page up': actions.previousSlide,
  'left': actions.previousSlide,
  's': actions.useSingleRenderer,
  'b': actions.useBookletRenderer,
  'p': actions.usePreviewRenderer
};
