import React from 'react';
import * as S from './style';

export interface ILabelProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  position?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: string;
  height?: string;
  margin?: string;
  padding?: number;
  weight?: number;
  backgroundColor?: string;
  color?: string;
  textDecoration?: string;
  letterSpacing?: string;
  lineHeight?: string;
  pointer?: boolean;
  opacity?: number;
  fontWeight?: number;
  borderRadius?: number;
  size?: number;
}

const defaultProps = {
  size: 16,
  weight: 400,
  position: 'static',
  color: '#212121',
  pointer: false,
};

const Label: React.FC<ILabelProps> = (props) => {
  return <S.Container {...props}>{props.children}</S.Container>;
};

Label.defaultProps = defaultProps as ILabelProps;

export { Label };
