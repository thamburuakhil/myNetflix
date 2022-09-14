import React from 'react';
import NavBar from './components/navbar/NavBar';
import Baner from "./components/baner/Baner";
import RawPost from './components/RawPost/RawPost';
import { originals,action} from './urls'
import './app.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Baner/>
      <RawPost url={originals} title="Netflix Originals" isSmall/>
      <RawPost url={action} title="Action"/>
      <RawPost url={action} title="Newest"/>
       </div>
  );
}

export default App;
