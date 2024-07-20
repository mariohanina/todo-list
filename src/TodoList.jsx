import { useState } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';


const initialTodos = [
    { id: 1, todo: "walk the dog", completed: true },
    { id: 2, todo: "walk the fish", completed: true },
    { id: 3, todo: "walk the dino", completed: false },
    { id: 4, todo: "walk your mom", completed: false },
]

// export default function CheckboxList() {
//     const [checked, setChecked] = React.useState([0]);

//     const handleToggle = (value) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];

//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }

//         setChecked(newChecked);
//     };

//     return (

//   );
// }

function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const removeTodo = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.filter(t => t.id !== id)
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    removeTodo={() => removeTodo(todo.id)} />
            ))}
        </List>
    )
}

export default TodoList;