import { ButtonsContainer, Button } from './Feedback.styled';
export const FeedbackOptions = ({
  handleIncrementGood,
  handleIncrementNeutral,
  handleIncrementBad,
}) => {
  return (
    <ButtonsContainer>
      <Button type="button" onClick={handleIncrementGood}>
        Good
      </Button>
      <Button type="button" onClick={handleIncrementNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={handleIncrementBad}>
        Bad
      </Button>
    </ButtonsContainer>
  );
};
