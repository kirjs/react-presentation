var React = require('react');

module.exports = React.createClass({
  render: function () {
    var slides = this.props.store.getAllSlides().map(slide => {
      return (
        <div className = "slide-wrapper" style = {this.props.sizes}>
          {slide}
        </div>
      );
    });

    return <div>{slides}</div>;
  }
});