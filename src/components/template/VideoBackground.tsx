import Logo from '@components/atoms/Logo';
import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export default function VideoBackground({ children }: Props) {
  return (
    <BackgroundWrapper>
      <div className='video-wrapper'>
        <video muted autoPlay loop playsInline controls={false}>
          <source src='videos/wave.mp4' type='video/mp4' />
          <strong>Your browser does not support the video tag.</strong>
        </video>
      </div>
      {children}
      <div className='logo-wrapper'>
        <Logo />
      </div>
    </BackgroundWrapper>
  );
}

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .video-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .logo-wrapper {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
