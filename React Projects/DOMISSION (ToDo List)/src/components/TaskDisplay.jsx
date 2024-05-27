import { useState } from "react";
import EditModal from "./EditModal";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

function TaskDisplay({ tasks, dispatch }) {
  const [isModal, setISModal] = useState(false)
  const [editTask, setEditTask] = useState({})

  const editHandler = (task, index) => {
      setISModal(true)
      setEditTask({ task, index })
  }
  const closeModal = () => {
      setISModal(false)
  }
  return (
    <>
      <div className="container m-1">
        {tasks.map((e, i) => {
          return (
            <>
              <div
                className="card"
                style={{ marginLeft: "200px", marginTop: "5px" }}
              >
                <div className="card-body p-2 border border-2">
                  <h3>{e}</h3>
                  <div className="buttons">
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => dispatch({ type: "delete", payload: i })}
                    >
                      Delete <RiDeleteBin5Fill />
                    </button>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => editHandler(e, i)}
                    >
                      Edit <FaEdit style={{margin:"3px"}}/>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                {isModal && <EditModal closeModal={closeModal} editTask={editTask} dispatch={dispatch} />}
            </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default TaskDisplay;

