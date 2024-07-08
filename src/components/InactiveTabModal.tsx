import React from 'react';
import styled from 'styled-components';
import ribbon from '../assets/images/popup_ribbon.png'; // обновленный путь
import '../assets/fonts/VAG World.ttf'; // обновленный путь

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 19px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;

  display: block;
  position: relative;
  font-family: 'VAG World', sans-serif;
  border-radius: 30px;
  width: 325px;
  height: 230px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -40px;
  position: relative;
  background-image: url(${ribbon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 5px 96px;
  top: -31px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: white;
  font-size: 20px;
  vertical-align: 25px;
  border-radius: 10px 10px 0 0;
  font-family: 'VAG World', sans-serif;
`;

const ModalText = styled.p`
  margin: 0px;
  color: #4a4a4a;
  font-size: 18px;
  padding: 18px 24px;
`;

const RefreshButton = styled.button`
  background-color: #65BD65;
  color: white;
  padding: 0px 0px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 24px;
  width: 100%;
  max-width: 200px;
  margin: -20px auto;  
  font-family: 'VAG World', sans-serif;
  box-shadow: 0px 3px 0px #3d8540;
`;

interface InactiveTabModalProps {
  onRefresh: () => void;
}

export const InactiveTabModal: React.FC<InactiveTabModalProps> = ({ onRefresh }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Две вкладки с игрой?</ModalTitle>
        </ModalHeader>
        <ModalText>
          Похоже, игра открыта в нескольких вкладках браузера. Чтобы продолжить играть в этой
          вкладке, обновите страницу.
        </ModalText>
        <RefreshButton onClick={onRefresh}>Обновить</RefreshButton>
      </ModalContent>
    </ModalOverlay>
  );
};
