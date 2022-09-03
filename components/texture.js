import styled from '@emotion/styled';
import BlueTexture from '../public/images/blue-texture-dots.svg';
import OrangeTexture from '../public/images/orange-texture-dots.svg';

export const BlueTextureBg = styled.div`
  background-image: url(${(props) =>
    props.OrangeTexture ? OrangeTexture.src : BlueTexture.src});
  background-color: #f8f8f8;
  background-position: 30vw -10vw;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  content: '';
`;
