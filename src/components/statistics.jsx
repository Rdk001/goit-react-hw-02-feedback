import { StatisticsContainer } from './Feedback.styled';

export const Statistics = ({ good, neutral, bad, total, PositiveFeedback }) => {
  return (
    <div>
      <StatisticsContainer>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feedback: {PositiveFeedback}%</span>
      </StatisticsContainer>
    </div>
  );
};
