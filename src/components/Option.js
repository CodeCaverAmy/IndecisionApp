import React from 'react'

// stateless functional component, uses state .. but doesn't manage it
const Option = (props) => (
    <div>
        {props.optionText}
        <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
    </div>
);

export default Option;