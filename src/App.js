import React from 'react';
import { MovingCube } from './components/MovingCube/MovingCube';
import { StaticCubeA, StaticCubeB, StaticCubeC, OptionsContainer } from './components/StaticCubes/index';
import { Navbar } from './components/MenuComponents/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <StaticCubeA />
      <StaticCubeB />
      <StaticCubeC />
      <MovingCube/>
    </div>
  );
}

export default App;
