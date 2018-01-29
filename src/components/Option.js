import React from 'react'

// stateless functional component, uses state .. but doesn't manage it
const Option = (props) => (
    <div className='option'>
        <p className='option__text'>{props.count}. {props.optionText}</p>
        <button 
            className='button button--link'
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
    </div>
);

export default Option;