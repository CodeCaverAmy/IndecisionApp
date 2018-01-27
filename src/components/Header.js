import React from 'react';

// Header can be a stateless functional component, it only presents info, and doesn't manage state
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
};

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;