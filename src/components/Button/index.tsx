import React from 'react';
import * as S from './style';

export interface IButtonProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  filled?: boolean;
  disabled?: boolean;
  loading?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  borderRadius?: String;
  color?: string;
  backgroundColor: string;
  pointer?: boolean;
}

const defaultProps = {};

const Button: React.FC<IButtonProps> = (props) => {
  return <S.Container {...props}>{props.children}</S.Container>;
};

Button.defaultProps = defaultProps as IButtonProps;

export default { Button };
