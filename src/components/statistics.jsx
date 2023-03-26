import { Component } from 'react';
import { StatisticsContainer } from './Feedback.styled';
import shortid from 'shortid';

class Statistics extends Component {
  static defaultProps = {
    stats: { good: 0, bad: 0, neutral: 0 },
    total: 0,
    positiveFeedback: 0,
  };
  render() {
    return (
      <div>
        <StatisticsContainer>
          {Object.entries(this.props.stats).map(([key, value]) => {
            return (
              <span key={shortid.generate()}>
                {key}: {value}
              </span>
            );
          })}
          <span>Total: {this.props.total}</span>
          <span>Positive feedback: {this.props.positiveFeedback}%</span>
        </StatisticsContainer>
      </div>
    );
  }
}

export default Statistics;
