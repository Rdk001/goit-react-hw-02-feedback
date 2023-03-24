import React, { Component } from 'react';
import { Container } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  static = {
    initalValue: 0,
    total: 0,
    positiveFeedback: 0,
  };
  state = {
    good: this.static.initalValue,
    neutral: this.static.initalValue,
    bad: this.static.initalValue,
  };

  handleIncrementGood = () => {
    this.setState(prevGood => ({ good: prevGood.good + 1 }));
    this.countTotalFeedback();
  };

  handleIncrementNeutral = () => {
    this.setState(prevNeutral => ({ neutral: prevNeutral.neutral + 1 }));
    this.countTotalFeedback();
  };

  handleIncrementBad = () => {
    this.setState(prevBad => ({ bad: prevBad.bad + 1 }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(
      props => (this.static.total = props.good + props.bad + props.neutral)
    );
    this.countPositiveFeedbackPercentage();
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(
      props =>
        (this.static.positiveFeedback = Math.round(
          (props.good * 100) / this.static.total
        ))
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { total, positiveFeedback } = this.static;

    return (
      <Container>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              handleIncrementGood={this.handleIncrementGood}
              handleIncrementNeutral={this.handleIncrementNeutral}
              handleIncrementBad={this.handleIncrementBad}
            />
          }
        />
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section
            title="Statistics"
            children={
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                PositiveFeedback={positiveFeedback}
              />
            }
          />
        )}
      </Container>
    );
  }
}
