import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

const LetterBox = styled.div<{ filled: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 20px;
  font-family: 'VAG World', sans-serif;
  color: #FFFFFF;
  background-color: ${({ filled }) => (filled ? '#65BD65' : '#FFFFFF')};
`;

const WordBox = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

interface WordGridProps {
  words: string[];
  foundWords: string[];
}

export const WordGrid: React.FC<WordGridProps> = ({ words, foundWords }) => {
  return (
    <GridContainer>
      {words.map((word, wordIndex) => (
        <WordBox key={wordIndex}>
          {word.split('').map((letter, letterIndex) => (
            <LetterBox key={letterIndex} filled={foundWords.includes(word)}>
              {foundWords.includes(word) ? letter : ''}
            </LetterBox>
          ))}
        </WordBox>
      ))}
    </GridContainer>
  );
};
