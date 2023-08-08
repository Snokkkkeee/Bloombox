import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components'; 
import { IoArrowBack } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';



  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); 
  }

const rotateForward = keyframes`
  100% {
    transform: rotate(360deg);
  }  
`;

const rotateBackward = keyframes`
  100% {
    transform: rotate(-360deg); 
  }
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold; 
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const Icon = styled(IoArrowBack)`
  animation: ${props => props.isForward ? rotateForward : rotateBackward} 0.5s linear;
`;


export default function BackButton() {

  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1); 
  };

  return (
    <Button onClick={handleClick}>
      <Icon isForward={clickCount % 2 === 0} />
      Back
    </Button>
  );

}