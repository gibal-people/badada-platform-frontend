import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  handleWorstSea: Function;
}

export default function WorstSea({ text = '서포리 해변', handleWorstSea }: Props) {
  return (
    <WorstSeaWrapper>
      <span className='WorstSeaTitle'>최악의 바다</span>
      <img src='/img/worstSea.png' alt='worstSeaImg' className='worstSeaImg' />
      <span className='worstSeaName'>{text}</span>
      <button
        className='worstSeaBtn'
        type='button'
        onClick={() => {
          handleWorstSea();
        }}
      >
        자세히 보기
      </button>
    </WorstSeaWrapper>
  );
}

const WorstSeaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  .WorstSeaTitle {
    color: ${({ theme }) => theme.colors.darkMatter};
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .worstSeaImg {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    margin: 18px 0 16px 0;
  }
  .worstSeaName {
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .worstSeaBtn {
    width: 65px;
    height: 16px;
    margin-top: 4px;
    border-radius: 50px;
    background: #21608d;
    color: ${({ theme }) => theme.colors.white};
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }
`;
