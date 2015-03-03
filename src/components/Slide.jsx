var React = require('react');

module.exports = React.createClass({
  render() {
    var className = 'slide ' + this.props.className;
    var css = {
      width: this.props.width,
      height: this.props.height
    };
    return <div id = {this.props.id} style = {css} className = {className}>
            {this.props.children}
    </div>;
  }
});

