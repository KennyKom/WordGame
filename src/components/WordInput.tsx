import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 2.5px;
  padding: 10px;
  border-radius: 10px;
`;

const LetterBox = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 18px;
  color: #4D4D4D;
  background-color: #FFFFFF;
  font-family: 'VAG World', sans-serif;
`;

interface WordInputProps {
  word: string[];
}

export const WordInput: React.FC<WordInputProps> = ({ word }) => {
  return (
    <Container>
      {word.length ? (
        <InputContainer>
          {word.map((letter, index) => (
            <LetterBox key={index}>{letter}</LetterBox>
          ))}
        </InputContainer>
      ) : null}
    </Container>
  );
};
