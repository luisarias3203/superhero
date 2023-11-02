import styled from '@emotion/styled'
import BlueTexture from '../public/images/blue-texture-dots.svg'
import OrangeTexture from '../public/images/orange-texture-dots.svg'
import theme from '../styles/theme'

export const TextureBg = styled.div`
  background-image: url(${props => {
    return props.orange ? OrangeTexture.src : BlueTexture.src
  }});
  background-color: #f8f8f8;
  background-repeat: no-repeat;
  background-position: 0;
  background-size: 200vw;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  content: '';
  ${theme.breakpoints.up('md')} {
    background-size: cover;
    background-position: 40vw 0vw;
  }
`
