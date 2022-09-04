import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"

const Task = ({ task, onDelete, onEdit }) => {
    return (
        <div>
            <div className="task">
                <div>
                    <p className="taskName">
                        <span className="textBold">
                            📁 Título:
                        </span> 
                            {task.text}
                    </p>
                    <p className="taskDate">
                        <span className="textBold">
                            📅 Fecha:
                        </span> 
                        {task.day}
                    </p>
                    <p className="taskDescription">
                        <span className="textBold">
                            🤓 Descripción:
                        </span> 
                        {task.description}
                    </p>
                </div>
                <div>
                    <p><FaTimes onClick={() => onDelete(task.id)} className="delIcon" /></p>
                    <p><FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></p>
                </div>
            </div>
        </div>
    )
}

export default Task