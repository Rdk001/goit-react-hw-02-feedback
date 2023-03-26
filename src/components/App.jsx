import { Component } from 'react';
import { Container } from './Feedback.styled';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    const arrayValues = Object.values(this.state);
    return arrayValues.reduce((acc, value) => (acc += value));
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Container>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              onLeaveFeedback={this.handleIncrement}
              options={this.state}
            />
          }
        />
        {!this.countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section
            title="Statistics"
            children={
              <Statistics
                stats={this.state}
                total={this.countTotalFeedback()}
                positiveFeedback={this.countPositiveFeedbackPercentage()}
              />
            }
          />
        )}
      </Container>
    );
  }
}
