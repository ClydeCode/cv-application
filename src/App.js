import React from "react";
import Header from './components/Header'
import './styles/app.css'

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
      </div>
    )
  }
}

export default App;
