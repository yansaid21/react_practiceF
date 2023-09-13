import React from 'react';
import { Cube } from './components/Cube/Cube';
import { Navbar } from './components/MenuComponents/Navbar/Navbar';
import { LateralMenu } from './components/MenuComponents/LateralMenu/LateralMenu';
import {Section2, Section3} from "./components/Sections/index"
function App() {

  return (
    <div className="App">
      <Navbar />
      <LateralMenu/>
      <Cube
      title="flexbox"
      id="flexbox"/>
      <Section2
      title="Section 2"
      id="section2"/>
      <Section3
      title="Section 3"
      id="section3"
      />
    </div>
  );
}

export default App;
