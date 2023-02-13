import styled from "styled-components";

export const Carousel = styled.div`
  width: 70%;
  color: white;
  padding: 24px 0px;
`;

export const Tarjeta = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 150px;
  min-width: 200px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.bgColor ? "#808080" : "rgba(0, 68, 126, 0.58)")};
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
`;

export const ContenedorCarrouselll = styled.div`
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
  margin: 0 auto;

  &::-webkit-scrollbar {
    height: 16px;
    background-color: #484848;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bc9b48;
  }
`;

export const CarouselArrow = styled.div`
  cursor: pointer;
  margin: 0 16px 0 0;

  svg {
    width: 24px;
    height: 24px;
  }

  &[datatype="right"] {
    margin: 0 0 0 16px;
  }

  @media screen and (min-width: 600px) {
    margin: 0 32px 0 0;

    svg {
      width: 32px;
      height: 32px;
    }

    &[datatype="right"] {
      margin: 0 0 0 32px;
    }
  }
`;

export const ContenedorContCarrousell = styled.div`
  display: flex;
  align-items: center;
`;
