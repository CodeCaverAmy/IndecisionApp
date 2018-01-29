import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOption} // allows user to click on the background or uses the escape key to close the modal
        contentLabel = "Selected Option" // users with accessibility settings enabled
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>Selected Option</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button' onClick = {props.handleClearSelectedOption}>Great!</button>
    </Modal>
);

export default OptionModal;