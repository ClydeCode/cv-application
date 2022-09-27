import React from "react";
import Header from './components/Header'
import Window from "./components/Window";
import './styles/app.css'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Window />
        </main>      
      </React.Fragment>
      )
  }
}

export default App;
