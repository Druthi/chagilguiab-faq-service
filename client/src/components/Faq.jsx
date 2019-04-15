import React from 'react';
import axios from 'axios';
import Features from './Features.jsx';
import QA from './QA.jsx';
import styles from '../css-modules/Faq.css';

class Faq extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: '',
      topFeatures: []
    }
  }

  componentDidMount () {
    let path = window.location.pathname.slice(9);
    axios.get(`http://localhost:3005${path}`)
      .then((results) => {
        let topFiveFeatures = [];
        for (let i = 0; i < 5; i++) {
          if (results.data[i]) {
            topFiveFeatures.push(results.data[i].features);
          }
        }
        this.setState({data: results.data, topFeatures: topFiveFeatures});
      })
  }

  render () {
    let data = this.state.data || [];
    return (
      <div>
        <Features features={this.state.topFeatures} />
        <h5> &nbsp; &nbsp; FAQ</h5>
        <table className="faq-table">
        {data.map((obj, idx) => {
          return <QA
                  key={idx}
                  question={obj.question}
                  answer={obj.answer}
          />
        })}
        </table>
      </div>
    )
  }
}

export default Faq;