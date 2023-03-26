import { Component } from 'react';
import { ButtonsContainer, Button } from './Feedback.styled';
import shortid from 'shortid';

class FeedbackOptions extends Component {
  render() {
    const keys = Object.keys(this.props.options);
    return (
      <ButtonsContainer>
        {keys.map(key => (
          <Button
            key={shortid.generate()}
            value={key}
            onClick={e => this.props.onLeaveFeedback(e)}
            type="button"
          >
            {key}
          </Button>
        ))}
      </ButtonsContainer>
    );
  }
}

export default FeedbackOptions;
