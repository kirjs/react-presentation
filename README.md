# React presentation

This is a presentation engine built with [React.js](http://facebook.github.io/react/),
which allows to use the power of React components to get a concise, but powerful  API for creating presentations.

## Installation

```bash
npm install react-presentation --save
```

## Usage
```jsx
var Presentation = require('./react-presentation/Presentation.jsx')
var Slide = require('./react-presentation/Slide.jsx');
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
  ,document.body);

```