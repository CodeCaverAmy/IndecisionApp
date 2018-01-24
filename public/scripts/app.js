'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var user = {
    name: 'Amy Plant',
    age: 50,
    location: 'Milwaukee'
};

var app = {
    title: 'Indecsision App',
    subtitle: 'Let us help you decide',
    options: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.title && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    user.location && React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');
console.log(appRoot);

ReactDOM.render(template, appRoot);
