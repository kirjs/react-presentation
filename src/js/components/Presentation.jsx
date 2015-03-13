var React = require('react/addons');
var actions = require('../config/actions.jsx');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var PresentationStore = require('../stores/PresentationStore.jsx');
var ShortcutStore = require('../stores/ShortcutStore.jsx');
var History = require('../modules/History.jsx');
var PrintStyles = require('../modules/PrintStyles.jsx');
var renderers = require('./renderers/renderers');
var invariant = require('invariant');
var ResizingMixin = require('../mixins/Resizing.jsx');

var stores = {
  PresentationStore: new PresentationStore(),
  ShortcutStore: new ShortcutStore()
};

var flux = new Fluxxor.Flux(stores, actions);


module.exports = React.createClass({
  mixins: [FluxMixin, ResizingMixin, StoreWatchMixin("PresentationStore")],
  getDefaultProps() {
    return {
      flux,
      slideWidth: 1280,
      slideHeight: 768
    };
  },

  normalizeChildren(children) {
    var count = React.Children.count(children);
    if (count === 0) {
      throw new Error("Please add at least one slide ");
    }

    return count === 1 ? [children] : children;

  },

  componentDidMount() {
    this.getFlux().actions.updateSlides(this.normalizeChildren(this.props.children));
    this.history = new History(flux.store('PresentationStore'), flux.actions.updateSlideIndex);
    this.history.attach();

    this.printStyles = new PrintStyles(this.getSizes());
    this.printStyles.attach();
  },
  componentWillUnmount() {
    this.history.detach();
    this.printStyles.detach();
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

  render() {
    invariant(renderers[this.state.renderer], 'Invalid renderer: "%s"', this.state.renderer);
    var Renderer = renderers[this.state.renderer];
    var classNames = 'react-presentation ' + this.state.renderer;
    return (
      <div className = {classNames}>
        <Renderer sizes = {this.getSizes()} store = {this.getFlux().store("PresentationStore")}></Renderer>
      </div>
    );
  }

});
