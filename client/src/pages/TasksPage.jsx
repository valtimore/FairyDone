import { useNavigate } from "react-router-dom";
import "./TasksPage.css";
import { useTasks } from "../context/TaskContext";
import { useEffect } from "react";

function TasksPage() {

    const navigate = useNavigate();
    const { getTasks, tasks, deleteTask } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    const today = new Date().toLocaleDateString('es-ES', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <div className="tasks-page">
            <aside className="sidebar">
                <h3>Usuario</h3>
                <p> {today}</p>
                <p>📝 Tareas Pendientes: {tasks.length}</p>
                <p>Próximamente aquí irá el perfil del usuario</p>
            </aside>

            <div className="tasks-container">
                <div className="tasks-header">
                    <div>
                        <h1 className="tasks-title">Tareas por realizar</h1>
                        <p className="tasks-subtitle">
                            Aquí puedes organizar y gestionar todas tus tareas
                        </p>
                    </div>
                    <button
                        className="new-task-button"
                        onClick={() => navigate('/tasks/new')}
                    >
                        + Nueva tarea
                    </button>
                </div>

                <div className="tasks-list">
                    {
                        tasks.map(task => (
                            <div className="task-card" key={task._id}>
                                <h2 className="task-title">{task.title}</h2>
                                <div className="task-description-field">
                                    <p className="task-description">{task.description}</p>
                                </div>
                                <div className="task-buttons">
                                    <button
                                        className="edit-task-button"
                                        onClick={() => navigate(`/tasks/${task._id}`)}
                                    >
                                        ✏️ Editar
                                    </button>
                                    <button
                                        className="delete-task-button"
                                        onClick={() => deleteTask(task._id)}
                                    >
                                        🗑 Eliminar
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TasksPage;
