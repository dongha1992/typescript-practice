import styled from 'styled-components';
import { ILabelProps } from './';

export const Container = styled.div<ILabelProps>`
  box-sizing: border-box;
  position: ${(props) => props.position && props.position};
  top: ${(props) => props.top && `${props.top}px`};
  right: ${(props) => props.right && `${props.right}px`};
  bottom: ${(props) => props.bottom && `${props.bottom}px`};
  left: ${(props) => props.left && `${props.left}px`};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  margin: ${(props) => props.margin && props.margin};
  padding: ${(props) => props.padding && `${props.padding}px`};
  font-size: ${(props) => props.size && `${props.size}px`};
  font-weight: ${(props) => props.weight && props.weight};
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
  color: ${(props) => props.color && props.color};
  text-decoration: ${(props) => props.textDecoration && props.textDecoration};
  letter-spacing: ${(props) => props.letterSpacing && props.letterSpacing};
  line-height: ${(props) => props.lineHeight && props.lineHeight};
  cursor: ${(props) => (props.pointer ? 'pointer' : 'static')};
  opacity: ${(props) => props.opacity && props.opacity};
  border-radius: ${(props) => props.borderRadius && `${props.borderRadius}px`};
  white-space: pre-wrap;
`;
