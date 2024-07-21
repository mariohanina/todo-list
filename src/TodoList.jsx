import { useState, useEffect } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const getInitialData = () => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (!todos) {
        return [];
    } else {
        return todos;
    }
}

function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.filter(t => t.id !== id)
        })
    }

    const toggleCheckbox = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return { ...todo }
                }
            })
        })
    }

    const addTodo = (todo) => {
        setTodos((prevTodo) => {
            return [...prevTodo, { id: crypto.randomUUID(), todo: todo, completed: false }]
        })
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: "column", m: 6 }}>

            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todos
            </Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        removeTodo={() => removeTodo(todo.id)}
                        toggleCheckbox={() => toggleCheckbox(todo.id)} />
                ))}

                <TodoForm addTodo={addTodo} />
            </List>

        </Box>
    )
}

export default TodoList;