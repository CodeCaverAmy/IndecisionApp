console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
    title: 'Indecsision App',
    subtitle: 'Let us help you decide',
    options: ['one','two']
};

const template2 = (
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

let count = 0;

const addOne = () => {
    count ++;
    renderCounterApp();
};

const minusOne = () => {
    count --;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderCounterApp();