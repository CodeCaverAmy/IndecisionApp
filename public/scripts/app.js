'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
    title: 'Indecsision App',
    subtitle: 'Let us help you decide',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // stop full page refresh
    var option = e.target.elements.option.value; // get the value the user typed
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

// create 'Remove All' button above list
// on click - wipe the array -> rerender
var removeAllOptions = function removeAllOptions() {
    app.options = [];
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
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
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAllOptions },
            'Remove All'
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render(); // render tha App once loaded
