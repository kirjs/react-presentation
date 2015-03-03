var React = require('react/addons');
var update = React.addons.update;
var actions = require('../config/actions.jsx');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var PresentationStore = require('../stores/PresentationStore.jsx');
var ShortcutStore = require('../stores/ShortcutStore.jsx');
var History = require('../modules/History.jsx');
var Resizing = require('../modules/Resizing.jsx');
var Slide = require('./Slide.jsx');


var stores = {
  PresentationStore: new PresentationStore(),
  ShortcutStore: new ShortcutStore()
};

var flux = new Fluxxor.Flux(stores, actions);


module.exports = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("PresentationStore")],
  getDefaultProps() {
    return {
      flux,
      slideWidth: 1280,
      slideHeight: 768,
      mode: 'single'
    };
  },

  componentDidMount() {
    this.getFlux().actions.updateSlides(this.props.children);
    this.history = new History(flux.store('PresentationStore'), flux.actions.updateSlideIndex);
    this.history.attach();
    this.resizing = new Resizing({
      width: this.props.slideWidth,
      height: this.props.slideHeight
    });
    this.resizing.attach();
  },
  componentWillUnmount() {
    this.history.detach();
    this.resizing.detach();
  },

  getStateFromFlux() {
    return this.getFlux().store("PresentationStore").getState();
  },

  getSizes() {
    return {
      width: this.props.slideWidth,
      height: this.props.slideHeight
    }
  },

  renderModes: {
    single() {
      var slide = this.props.children[this.state.slideIndex];
      return (
        <div className = "presentation">
          <div className = "slide-wrapper" style = {this.getSizes()}>
          {slide}
          </div>
        </div>
      );
    }
  },

  render() {
    return this.renderModes[this.props.mode].call(this);
  }

});
