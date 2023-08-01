import React from 'react';
import styled from 'styled-components';
import ImageBackground from '@components/template/ImageBackground';
import DefaultTemplate from '@components/layouts/PageLayout';

export default function Process() {
  return (
    <DefaultTemplate customStyles={false}>
      <ImageBackground>
        <ProcessPage>
          <h1>
            결과 <br />
            분석 중...
          </h1>
          <p>
            당신의 성향을 분석하여 <br />
            일치하는 <span>바다</span>를 <br />
            찾고 있어요
          </p>
        </ProcessPage>
      </ImageBackground>
    </DefaultTemplate>
  );
}

const ProcessPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 75px;
  width: 100%;
  height: 100%;

  h1 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.h1};
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 26px;
    font-weight: 600;
    line-height: normal;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
