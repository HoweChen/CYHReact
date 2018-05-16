import React from "react";
import Modal from "react-modal";

const TodoModal = props => {
  return (
    // <Modal contentLabel="Selected Todo">
    //   <h3>Selected todo</h3>
    //   {props.selected}
    // </Modal>
    <Modal
      isOpen={!!props.selectedTodo}
      contentLabel="Selected Option"
      onRequestClose={props.handleCloseModal}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Todo</h3>
      {props.selectedTodo && (
        <p className="modal__body">{props.selectedTodo}</p>
      )}
      <button onClick={props.handleCloseModal} className="button">
        Okay
      </button>
    </Modal>
    // <p>Test</p>
  );
};

export default TodoModal;
