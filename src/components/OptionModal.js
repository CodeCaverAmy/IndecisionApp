import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOption} // allows user to click on the background or uses the escape key to close the modal
        contentLabel = "Selected Option" // users with accessibility settings enabled
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick = {props.handleClearSelectedOption}>Great!</button>
    </Modal>
);

export default OptionModal;