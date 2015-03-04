var React = require('react');
module.exports = React.createClass({
  render: function () {
    return <div className = "slide-wrapper"  style = {this.props.sizes}>{ this.props.store.getCurrentSlide()}</div>;
  }
});