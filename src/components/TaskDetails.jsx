import TaskListItem from "./TaskListItem";
import { useState } from "react";

const Modal = ({ isOpen, task }) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    // const modalRef = useRef(null);
  
    return (
      <dialog open={isModalOpen}  className="modal">
        <TaskListItem task={task} />
        <button onClick={() => setModalOpen(false)}>Close</button>
      </dialog>
    );
  };

  export default Modal;