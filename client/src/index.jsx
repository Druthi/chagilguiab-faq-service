import React from 'react';
import ReactDOM from 'react-dom';
import Faq from './components/Faq.jsx';
import styles from './css-modules/index.css';

class FeaturesSpecs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listOpen: false
    }

    this.setState = this.setState.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }
      toggleList () {
        this.setState({listOpen: !this.state.listOpen});

  }
  render () {
    return (
      <div className="main-container">
        <h4 className="container-panel" onClick={()=> this.toggleList()}>Features and Specs<span className="floatRight">&#9662;</span></h4>
        {this.state.listOpen
          ? <Faq />
          : null
        }
      </div>
    )
  }
}

window.Faqs = FeaturesSpecs;
ReactDOM.render(<FeaturesSpecs/>, document.getElementById('FeaturesSpecs') || document.createElement('div'));