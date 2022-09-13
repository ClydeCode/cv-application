import React from "react";
import Header from './components/Header'
import AboutSectionPreview from './components/AboutSectionPreview'
import './styles/app.css'
import PreviewWindow from "./components/PreviewWindow";

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
