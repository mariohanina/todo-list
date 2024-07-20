import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

function TodoItem({ todo, removeTodo }) {
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                    <CommentIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined}
                // onClick={handleToggle(value)} 
                dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${todo.todo}`} />
            </ListItemButton>
        </ListItem>
    )
}

export default TodoItem