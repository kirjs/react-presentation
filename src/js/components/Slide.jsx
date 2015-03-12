var React = require('react');

module.exports = React.createClass({
  render() {
    var className = 'slide ' + this.props.className;

    return <div id = {this.props.id} className = {className}>
            {this.props.children}
    </div>;
  }
});

