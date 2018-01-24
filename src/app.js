console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
    title: 'Indecsision App',
    subtitle: 'Let us help you decide',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); // stop full page refresh
    const option = e.target.elements.option.value; // get the value the user typed
    if (option) {
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
};

const onRemoveAll = () => {
    app.options=[];
    render();
}


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.title && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                /* map goes through each item in te array, creating a new array of values */
                app.options.map((option) => <li key={option}>{option}</li>
            )}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render(); // render tha App once loaded
