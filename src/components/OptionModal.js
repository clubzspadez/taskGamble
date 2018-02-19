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
  >
    <div>
      {props.selectedOption && <p>{props.selectedOption}</p> }
    </div>
    <button onClick={props.handleClearPick}>Okay!</button>
  </Modal>
;

export default OptionModal;