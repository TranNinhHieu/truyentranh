import {useState} from 'react'
import Content from './Content.js'
import TabBar from './components/TabBar/TabBar.js'
import SlideShow from './components/SlideShow/SlideShow.js'
import './App.scss'
function App() {
 

  return (
    <div className="container">
      <TabBar/>
      <SlideShow/>
    </div>
  );
}

export default App;
