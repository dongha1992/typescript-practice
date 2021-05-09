import { table } from 'console';
import React from 'react';
import * as S from './style';

const TAB_NAMES = [
  { id: 0, title: '챌린지 방식' },
  { id: 1, title: '미라클 모닝' },
  { id: 2, title: '후기' },
];

export interface ITabProp {
  reviewCount: string;
}

export const Tab: React.FC<ITabProp> = ({ reviewCount }) => {
  const onScrollToIndex = () => {};
  return (
    <S.Container>
      {TAB_NAMES.map((tab, index) => (
        <S.Item
          key={tab.id}
          onClick={() => {
            onScrollToIndex();
          }}
        >
          <S.Title isSelected={index === tab.id}>{tab.title}</S.Title>
          {tab.title === '후기' ? <S.Count>{reviewCount}</S.Count> : ''}
        </S.Item>
      ))}
      <S.Indicator length={TAB_NAMES.length} index={0} />
    </S.Container>
  );
};

export default Tab;
