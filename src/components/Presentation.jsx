var React = require('react');
var actions = require('../config/actions.jsx');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var PresentationStore = require('../stores/PresentationStore.jsx');
var ShortcutStore = require('../stores/ShortcutStore.jsx');
var History = require('../modules/History.jsx');


var stores = {
  PresentationStore: new PresentationStore(),
  ShortcutStore: new ShortcutStore()
};

var flux = new Fluxxor.Flux(stores, actions);


module.exports = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("PresentationStore")],
  getDefaultProps() {
    return {
      flux
    };
  },

  componentDidMount() {
    this.getFlux().actions.updateSlides(this.props.children);
    this.history = new History(flux.store('PresentationStore'), flux.actions.updateSlideIndex);
    this.history.attach();
  },
  componentWillUnmount() {
    this.history.detach();
  },

  getStateFromFlux() {
    return this.getFlux().store("PresentationStore").getState();
  },

  render() {
    return this.props.children[this.state.slideIndex];
  }
});
