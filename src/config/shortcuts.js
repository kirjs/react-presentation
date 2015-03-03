var actions = require('./actions.jsx');
module.exports = {
  'page down': actions.nextSlide,
  'page up': actions.previousSlide,
  'left': actions.previousSlide,
  'right': actions.nextSlide
};
