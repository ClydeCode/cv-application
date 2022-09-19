import React from "react";
import Header from './components/Header'
import PreviewWindow from "./components/PreviewWindow";
import './styles/app.css'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <PreviewWindow />
        </main>      
      </React.Fragment>
      )
  }
}

export default App;
