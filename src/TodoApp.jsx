import { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { Container, Paper, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

function TodoApp() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  <Container maxWidth="sm" sx={{ mt: 4 }}>
    <Paper sx={{ p: 2, bgcolor: '#D5A6BD' }}>
      {/* TodoApp content */}
    </Paper>
  </Container>

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 2, bgcolor: '#D5A6BD' }}>
        <TextField
          label="Add a task"
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        {isMdUp && (
          <List sx={{ mt: 2 }}>
            {tasks.map((task, index) => (
              <ListItem key={index}>
                <ListItemText primary={task} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleDeleteTask(index)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
}

export default TodoApp;
