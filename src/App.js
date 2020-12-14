import { Typography, Container, Box } from '@material-ui/core';
import { default as React } from 'react';
import Editor from './Editor';

function App() {
  return (
    <React.Fragment>
      <Container
        style={{ backgroundColor: '#d4ecff', minHeight: "100vh" }}
        maxWidth="xl">
        <Box p={5}>
          <Box>
            <Typography variant="h6" component="span">
              EditorJS With React
        </Typography>
          </Box>
          <Box
            mt={2}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #cccccc'
            }}>
            <Editor />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
