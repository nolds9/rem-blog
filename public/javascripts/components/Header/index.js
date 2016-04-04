import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

var Header = React.createClass({

    render() {

        return (
            React.createElement('div', {},
                'Jello World! I am web browser render logic.  Count your days!'
            )
        )

    }

});

ReactDOM.render(
    React.createElement(Header, {}),
    document.getElementById('header')
);
