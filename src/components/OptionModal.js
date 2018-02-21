import React from 'react';
import ReactModal from 'react-modal';
import Modal from 'react-modal/lib/components/Modal';

const OptionModal = (props) => 
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    ariaHideApp={false}
    onRequestClose={props.handleClearPick}
     /*
    Number indicating the milliseconds to wait before closing the modal.
     */
    closeTimeoutMS={200}
    className="modal"
  >
    <div>
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p> }
    </div>
    <button className="button" onClick={props.handleClearPick}>Okay!</button>
  </Modal>
;

export default OptionModal;