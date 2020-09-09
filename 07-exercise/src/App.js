
import React from 'react';
import B from './components/B';
import C from './components/C';
import Container from './components/Container';

function App() {

  return (
    <Container> 
    <div className="App">
      <h1>Counter App</h1>
      <B />
      <C />
    </div>
    </Container>
  );
}


export default App;