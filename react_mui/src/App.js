import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; // Import Box for layout

function App() {
  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography 
        variant="h3" 
        component="h6" 
        align="center" 
        noWrap={true} 
        gutterBottom={true} 
        sx={{ backgroundColor: 'lightBlue', color: 'red' }}
      >
        Hello React Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ut quis eligendi, voluptatibus laudantium similique enim expedita exercitationem molestias earum eos magnam quae nihil recusandae, ex velit voluptatem incidunt fuga?
      </Typography>

        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </Box>
  );
}

export default App;