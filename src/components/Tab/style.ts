import styled from 'styled-components';
import Colors from '@constants/Colors';

export const Container = styled.div`
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Colors.newGray200};
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
  display: felx;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
`;

export const Title = styled.div<{ isSelected: boolean }>`
  color: ${(props) =>
    props.isSelected ? `${Colors.mainColor}` : `${Colors.black}`}
  font-weight: bold;
`;
export const Indicator = styled.div<{
  length: number;
  index: number;
}>`
  position: absolute;
  width: ${(props) => `calc(100%/${props.length})`};
  left: ${(props) => `calc(calc(100% / ${props.length}) * ${props.index})`};
  bottom: 0px;
  height: 5px;
  background-color: ${Colors.mainColor};
  transition: all 500ms ease-in-out;
`;
export const Count = styled.div``;
