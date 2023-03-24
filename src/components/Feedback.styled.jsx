import styled from '@emotion/styled';

const Container = styled.div`
  width: 1600px;
  margin-left: auto;
  margin-right: auto;
`;

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 24px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;
const Button = styled.button`
  padding: 6px 12px;
  font-size: 16px;
  background-color: #f1f1f1;
  border-radius: 5px;
`;
export { StatisticsContainer, Container, ButtonsContainer, Button };
