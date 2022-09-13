import React from "react";
import Header from './components/Header'
import AboutSectionPreview from './components/AboutSectionPreview'
import './styles/app.css'

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="content">
          <AboutSectionPreview />
        </div>
      </div>
    )
  }
}

export default App;
