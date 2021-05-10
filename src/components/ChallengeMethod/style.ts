import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  padding-top: 30px;
`;
export const ImageWrapper = styled.div`
  width: 40%;
`;

export const Comment = styled.div`
  padding-left: 20px;
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SliderWrapper = styled.div`
  .slick-slider {
    .slick-list {
      .slick-track {
        .slick-slide {
        }
      }
    }
    .slick-dots {
      display: flex !important;
      align-items: center;
      justify-content: center;
      li {
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background-color: #cbced3;
        margin: 20px 10px 10px;
      }
    }
    .slick-dots li.slick-active {
      background-color: #767e90;
    }
  }
`;

export const Image = styled.img<{ isLast: boolean }>`
  padding-right: ${(props) => (props.isLast ? '0px' : '8px')};
`;
