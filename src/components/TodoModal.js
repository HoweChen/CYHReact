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
    >
      <h3>Selected Todo</h3>
      {props.selectedTodo && <p>{props.selectedTodo}</p>}
      <button onClick={props.handleCloseModal}>Okay</button>
    </Modal>
    // <p>Test</p>
  );
};

export default TodoModal;
