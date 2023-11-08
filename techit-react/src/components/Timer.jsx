import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(10);
  const [buttonText, setButtonText] = useState('시작');
  const resetButtonText = '리셋';

  const handleButtonClick = () => {
    if (buttonText === '시작') {
      setButtonText('정지');
    } 
    if (buttonText === '정지') {
      setButtonText('시작');
      return;
    }
  }

  const handleClickResetButton = () => {

    if (resetButtonText === '리셋') {
      setButtonText('시작');
      setTimer(10);
    }
  }

  useEffect(() => {
    let interval;
    
    if (timer === 0) {
      alert('시간이 종료 되었습니다!');
      setButtonText('시작');
      setTimer(10);
    }

    if (buttonText === '정지') {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, buttonText]);

  return (
    <div>
      <div className='timerText'>
        { `0:${timer.toString().padStart(2, '0')}` }
      </div>

      <button 
      onClick={ handleButtonClick }>
        { buttonText }
      </button>
      <button 
      onClick={ handleClickResetButton }>
        { resetButtonText }
      </button>
    </div>
  );
};

export default Timer;
