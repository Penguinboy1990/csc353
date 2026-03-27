import React, { useState, useEffect } from 'react';
function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editingTask, setEditingTask] = useState('');
    const API_URL = 'http://localhost:5000/todos';
    // Fetch Todos (GET)
    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);
    // Add Todo (POST)
    const addTodo = () => {
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task, completed: false })
        })
            .then(res => res.json())
            .then(newTodo => setTodos([...todos, newTodo]));
    };
    // Update Todo (PATCH)
    const updateTodo = (id) => {
        fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task: editingTask })
        })
            .then(res => res.json())
            .then(() => {
                setTodos(todos.map(t => t.id === id ? { ...t, task: editingTask } : t));
                setEditingId(null);
                setEditingTask('');
            });
    };
    // Delete Todo (DELETE)
    const deleteTodo = (id) => {
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then(() => setTodos(todos.filter(t => t.id !== id)));
    };
    return (
        <div>
            <h1>To-Do List</h1>
            <input value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(t => (
                    <li key={t.id}>
                        {editingId === t.id ? (
                            <>
                                <input value={editingTask} onChange={(e) => setEditingTask(e.target.value)} />
                                <button onClick={() => updateTodo(t.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                {t.task}
                                <button onClick={() => { setEditingId(t.id); setEditingTask(t.task); }}>Edit</button>
                                <button onClick={() => deleteTodo(t.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;
