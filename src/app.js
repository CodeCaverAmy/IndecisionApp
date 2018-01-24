console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
    title: 'Indecsision App',
    subtitle: 'Let us help you decide',
    options: ['one','two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.title && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);