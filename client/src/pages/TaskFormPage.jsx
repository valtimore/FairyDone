import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import "./TaskFormPage.css"; 

function TaskFormPage() {
    const { register, handleSubmit } = useForm();
    const { createTask } = useTasks();

    const onSubmit = handleSubmit((data) => {
        createTask(data);
    });

    return (
        <div className="form-container">
            <form onSubmit={onSubmit} className="task-form">
                <h2 className="form-title">🌸 Nueva Tarea</h2>
                <p className="form-subtitle">Puedes incluir una descripción</p>

                <input
                    type="text"
                    placeholder="Título de la tarea"
                    {...register("title", { required: true })}
                    autoFocus
                    className="input-field"
                />
                <textarea
                    rows="3"
                    placeholder="Descripción"
                    {...register("description")}
                    className="textarea-field"
                ></textarea>
                <button type="submit" className="submit-button">Guardar</button>
            </form>
        </div>
    );
}

export default TaskFormPage;
