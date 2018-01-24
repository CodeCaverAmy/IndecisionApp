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
    options: ['one','two']
};

var template = (
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

var template2 = (
  <div>
    <h1>Name: {user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {user.location && <p>Location: {user.location}</p>}
  </div>
);

var appRoot = document.getElementById('app');
console.log(appRoot);

ReactDOM.render(template, appRoot);
