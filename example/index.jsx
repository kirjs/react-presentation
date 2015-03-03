var Presentation = require('../src/index.jsx');
var Slide = Presentation.Slide;
var React = require('react');

React.render(
  <Presentation>
    <Slide>
      <h1>React Presentation</h1>
      <p>This is a react presention</p>
    </Slide>
    <Slide>
      <h1>Slide with a list</h1>
      <ul>
        <li>You </li>
        <li>Can</li>
        <li>Have</li>
        <li>A</li>
        <li>List</li>
        <li>Of</li>
        <li>Items</li>
      </ul>
    </Slide>
  </Presentation>
  , document.body);