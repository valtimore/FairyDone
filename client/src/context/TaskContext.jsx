import { createContext, useContext } from "react";
import { createTaskRequest, getTasksRequest } from "../api/task";
import { useState } from "react";

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("usetaks debe debe estar dentro de un TaskProvider");
    }
    
    return context;
}

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
        } catch (error) {
            console.error("Error en el fetch:", error);
        }
    }

    const createTask = async (task) => { 
        const res = await createTaskRequest(task);
        console.log(res);
    }


    return (
        <TaskContext.Provider 
            value={{
                tasks,
                createTask,
                getTasks
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}
