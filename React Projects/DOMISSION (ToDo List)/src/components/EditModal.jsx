import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

function EditModel({ closeModal, editTask, dispatch }) {
  const [updateTask, setUpdateTask] = useState(editTask.task);
  const updateHandler = () => {
    dispatch({
      type: "edit",
      payload: { task: updateTask, index: editTask.index },
    });
    closeModal();
  };
  return (
    <>
      {console.log(updateTask)}
      <div className="modal-container">
        <div className="modal">
          <h2>EDIT YOUR TASK</h2>
          <textarea
            cols="30"
            rows="4"
            value={updateTask}
            onChange={(e) => setUpdateTask(e.target.value)}
          ></textarea>
          <div className="modal-buttons">
            <button onClick={updateHandler}> Update Task</button>
            <button onClick={closeModal}>Close</button>
          </div>
          <h2 className="cross" onClick={closeModal}>
            <RxCrossCircled />
          </h2>
        </div>
      </div>
    </>
  );
}

export default EditModel;
