import React from 'react';
import styled from 'styled-components';

const VictoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* Changed to space-between */
  height: 50vh; /* Full viewport height */
  padding: 20px;
`;

const VictoryMessageContainer = styled.div`
  text-align: center;
`;

const VictoryMessage = styled.h2`
  color: #ffffff;
  font-size: 24px;
  margin: 10px 0;
  font-family: 'VAG World', sans-serif;
`;

const VictorySubMessage = styled.h1`
  color: #ffffff;
  font-size: 36px;
  margin: 10px 0;
  font-family: 'VAG World', sans-serif;
`;

const NextLevelButton = styled.button`
  background-color: #65BD65;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 24px;
  margin-top: auto;
  font-family: 'VAG World', sans-serif;
  box-shadow: 0px 3px 0px #3d8540;

  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }
`;

interface VictoryScreenProps {
  onNextLevel: () => void;
  level: number;
}

export const VictoryScreen: React.FC<VictoryScreenProps> = ({ onNextLevel, level }) => {
  return (
    <VictoryContainer>
      <VictoryMessageContainer>
        <VictoryMessage>Уровень {level} пройден</VictoryMessage>
        <VictorySubMessage>Изумительно!</VictorySubMessage>
      </VictoryMessageContainer>
      <NextLevelButton onClick={onNextLevel}>Уровень {level + 1}</NextLevelButton>
    </VictoryContainer>
  );
};
