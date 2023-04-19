import { ThemeProvider, createTheme } from '@mui/material';
import TodoApp from './TodoApp';
import Profile from './components/Profile';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#A7D6D6', // pastel blue
    },
    secondary: {
      main: '#F4A7B9', // pastel pink
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <Profile></Profile>
      <TodoApp />
    </ThemeProvider>
  );
}

export default App;
