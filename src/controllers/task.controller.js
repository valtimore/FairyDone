import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        user:req.user.id // Assuming req.user is set by the auth middleware
    }).populate('user'); // Populate user details
    res.json(tasks);
}

export const createTasks = async (req, res) => {
    const { title, description, date } = req.body;

    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id // Assuming req.user is set by the auth middleware
    });

    const savedTask = await newTask.save();
    res.json(savedTask);
}

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id).populate('user'); // Populate user details
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
}

export const deleteTasks = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json({ message: 'Task not found' });
    return res.sendStatus(204); // No Content
}


export const updateTasks = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
}


