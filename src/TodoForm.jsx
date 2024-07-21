import { ListItem } from "@mui/material";
import { useState } from "react";

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';


function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleChange = (evt) => {
        setValue((currentValue) => {
            return evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (value.length > 0) {
            addTodo(value);
            setValue((currentValue) => {
                return "";
            })
        }
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <TextField
                    sx={{ width: "100%" }}
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={value}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="Create todo" type="submit">
                                    <AddIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ListItem>
    )
}









export default TodoForm