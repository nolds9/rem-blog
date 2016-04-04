import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

var Header = React.createClass({
  render:  function(){
    return (
      react.createElement('div', {},
        'Jello World, I am web browser render logic.  Count your days!'
      )
    )
  }
});

ReactDom.render(
  React.createElement(Header, {}),
  document.getElementById('header')
);
