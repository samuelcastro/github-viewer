import React from 'react';
import PropTypes from 'prop-types';
import styledComponents, { keyframes } from 'styled-components';

const LoadingContainer = styledComponents.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
`

const loadingKeyFrame = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoadingAnimation = styledComponents.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  margin-top: 5px;
  border: 3px solid ${({color}) => color};
  border-radius: 50%;
  animation: ${loadingKeyFrame} 0.9s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({color}) => color} transparent transparent transparent;
`

const LoadingDelay = styledComponents.div`
  animation-delay: ${({delay}) => delay}
`

const Loading = ({ color, size }) => (
  <LoadingContainer>
    <LoadingAnimation color={color} size={size} />
    <LoadingDelay delay='-0.45s' />
    <LoadingDelay delay='-0.3s' />
    <LoadingDelay delay='-0.15s' />
  </LoadingContainer>
);

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Loading.defaultProps = {
  color: '#fff',
  size: 30
}

export default Loading;
