import React from "react";
import Header from './components/Header'
import PreviewWindow from "./components/PreviewWindow";
import './styles/app.css'

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="content">
          <PreviewWindow />
        </div>
      </div>
    )
  }
}

export default App;
