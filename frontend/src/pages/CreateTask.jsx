// src/pages/CreateTask.jsx
import React, { useState } from "react";

const CreateTask = () => {
    const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
});

    const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title || !task.description || !task.dueDate) {
    alert("Please fill in all fields.");
    return;
    }

    console.log("Task submitted:", task);
    alert("Task created! (backend coming soon)");
    setTask({ title: "", description: "", dueDate: "" });
};

    return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Create New Task</h2>

        <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        className="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className="w-full p-2 mb-3 border border-gray-300 rounded"
        ></textarea>

        <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="w-full p-2 mb-3 border border-gray-300 rounded"
        />

        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
        Add Task
        </button>
    </form>
    </div>
);
};

export default CreateTask;
