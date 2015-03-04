var React = require('react/addons');
var classSet = React.addons.classSet;
module.exports = React.createClass({
  render: function () {
    var store = this.props.store;
    var currentSlide = store.getCurrentSlide();
    var slides = store.getAllSlides().map(slide => {
      var classes = classSet({
        'slide-wrapper': true,
        'current': (slide === currentSlide)
      });
      return (
        <div className = {classes} style = {this.props.sizes}>
          {slide}
        </div>
      );
    });

    return <div className = "preview">{slides}</div>;
  }
});